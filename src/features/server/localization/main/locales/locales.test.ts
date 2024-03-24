import { ACCEPTED_LANGUAGES } from "@entities/constants";
import fs from "fs";
import path from "path";

type JsonValue = string | JsonObject;
type JsonObject = { [key: string]: JsonValue };

describe("localizations", () => {
  const folders = fs
    .readdirSync(__dirname)
    .filter((file) => fs.statSync(path.join(__dirname, file)).isDirectory());
  test("check for localization folders", () => {
    expect(folders).toEqual(expect.arrayContaining(ACCEPTED_LANGUAGES));
    expect(folders.length).toEqual(ACCEPTED_LANGUAGES.length);
  });
  const defaultNs: Record<string, () => Promise<JsonObject>> = {};
  const defaultNsFiles = fs
    .readdirSync(path.join(__dirname, "en"))
    .filter((file) => file.endsWith(".json"));
  for (const file of defaultNsFiles) {
    defaultNs[file] = () => import(`./en/${file}`).then((val) => val.default);
  }
  folders.forEach((locale) => {
    describe(`check ${locale} localization files`, () => {
      const localeNsFiles = fs
        .readdirSync(path.join(__dirname, locale))
        .filter((file) => file.endsWith(".json"));
      test(`${locale} contain all localization files`, () => {
        expect(localeNsFiles).toEqual(defaultNsFiles);
        expect(folders.length).toEqual(ACCEPTED_LANGUAGES.length);
      });
      localeNsFiles.forEach((file) => {
        test(`${locale}/${file} is equal to default ns`, async () => {
          const defaultFile = await defaultNs[file]();
          const localFile = (await import(`./${locale}/${file}`)).default;
          const defaultKeys = getObjectKeys(defaultFile);
          const localKeys = getObjectKeys(localFile);
          expect(localKeys).toEqual(defaultKeys);
          expect(folders.length).toEqual(ACCEPTED_LANGUAGES.length);
          if (locale !== "en") {
            expect(localFile).not.toEqual(defaultFile);
          }
        });
      });
    });
  });
});

const getObjectKeys = (obj: JsonObject, path = ""): string[] => {
  let keys: string[] = [];
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      keys = keys.concat(
        getObjectKeys(obj[key] as JsonObject, `${path}${key}.`),
      );
    } else {
      keys.push(`${path}${key}`);
    }
  }
  return keys;
};
