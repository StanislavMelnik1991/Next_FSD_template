import { ACCEPTED_LANGUAGES, DEFAULT_LANGUAGE } from "@entities/constants";
import fs from "fs";
import path from "path";

type JsonValue = string | JsonObject;
type JsonObject = { [key: string]: JsonValue };

describe("localizations", () => {
  const rootFiles = fs.readdirSync(__dirname);
  const nsFolders = rootFiles.filter(
    (file) => fs.statSync
      (path.join(__dirname, file)).isDirectory()
  );
  nsFolders.forEach((ns) => {
    const nsFolderPath = path.join(__dirname, ns)
    describe(`${ns}:`, () => {
      test('Locales folder exist', () => {
        const nsFiles = fs.readdirSync(nsFolderPath);
        expect(nsFiles.includes('locales')).toBeTruthy();
      });
      const localesFolder = path.join(nsFolderPath, 'locales')
      const localeFiles = fs.readdirSync(localesFolder);
      const localeFileNames = localeFiles.map((locale) => locale.replace('.json', ''))
      test('Contains all locale files', () => {
        expect(localeFileNames).toEqual(expect.arrayContaining(ACCEPTED_LANGUAGES))
      })
      test('No unnecessary files', () => {
        expect(localeFileNames.length).toEqual(ACCEPTED_LANGUAGES.length);
      })

      test('locale files', async () => {
        const localeFilesArr: Array<Record<string, any>> = await Promise.all(
          localeFiles.map(async (el) => {
            return import(`./${ns}/locales/${el}`).then(val => val.default)
          })
        )
        const keysArr = localeFilesArr.map((el) => getObjectKeys(el))
        keysArr.forEach((el)=>{
          expect(el).toEqual(keysArr[0]);
        })
      })
    })
  })
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
