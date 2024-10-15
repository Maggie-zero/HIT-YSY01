import CryptoJS from 'crypto-js'

enum Mode {
  AES = "AES",
  DES = "DES",
  Rabbit = "Rabbit",
  RC4 = "RC4",
}

const KEY_d = "000102030405060708090a0b0c0d0e0f";

export const M0_Encrypt = (mode: string, plaintext: string, key = KEY_d): string => {
  try {
    switch (mode) {
      case Mode.AES: {
        const KEY = CryptoJS.enc.Utf16.parse(key);
        const iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
        let ciphertext = CryptoJS.AES.encrypt(plaintext, KEY, {
          iv: iv,
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
        return ciphertext.toString()
      }
      case Mode.DES: {
        const KEY = CryptoJS.enc.Utf8.parse(key); // key
        const iv = CryptoJS.enc.Utf8.parse("4c43c365"); // iv
        const ciphertext = CryptoJS.TripleDES.encrypt(plaintext, KEY, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
        return ciphertext.toString()
      }
      case Mode.Rabbit: {
        const KEY = CryptoJS.enc.Hex.parse(key);
        const iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
        let ciphertext = CryptoJS.Rabbit.encrypt(plaintext, KEY, {
          iv: iv,
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
        return ciphertext.toString()
      }
      case Mode.RC4: {
        const KEY = CryptoJS.enc.Hex.parse(key);
        const iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
        let ciphertext = CryptoJS.RC4.encrypt(plaintext, KEY, {
          iv: iv,
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
        return ciphertext.toString()
      }
      default: {
        return plaintext
      }
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
}
export const M0_Decrypt = (mode: String, plaintext: string, key = KEY_d): string => {
  try {
    switch (mode) {
      case Mode.AES: {
        const KEY = CryptoJS.enc.Utf16.parse(key);
        const iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
        const ciphertext = CryptoJS.AES.decrypt(plaintext, KEY, {
          iv: iv,
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
        return ciphertext.toString(CryptoJS.enc.Utf8)
      }
      case Mode.DES: {
        const KEY = CryptoJS.enc.Utf8.parse(key); // key
        const iv = CryptoJS.enc.Utf8.parse("4c43c365"); // iv
        const decrypted = CryptoJS.TripleDES.decrypt(plaintext, KEY, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8)// 返回解密后的字符串
      }
      case Mode.Rabbit: {
        const KEY = CryptoJS.enc.Hex.parse(key);
        const iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
        const ciphertext = CryptoJS.Rabbit.decrypt(plaintext, KEY, {
          iv: iv,
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
        return ciphertext.toString(CryptoJS.enc.Utf8)
      }
      case Mode.RC4: {
        const KEY = CryptoJS.enc.Hex.parse(key);
        const iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
        const ciphertext = CryptoJS.RC4.decrypt(plaintext, KEY, {
          iv: iv,
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
        return ciphertext.toString(CryptoJS.enc.Utf8)
      }
      default: {
        return plaintext
      }
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
}

/**
 * AES 加密
 * @param word: 需要加密的文本
 * KEY: // 需要前后端保持一致
 * mode: ECB // 需要前后端保持一致
 * pad: Pkcs7 //前端 Pkcs7 对应 后端 Pkcs5
 */
// const KEY = CryptoJS.enc.Utf8.parse('d7b85f6e214abcde')
// const KEY_d = 'd7b85f6e214abcde';

export const AES_Encrypt = (plaintext: string | CryptoJS.lib.WordArray, key = KEY_d) => {
  const KEY = CryptoJS.enc.Utf8.parse(key);
  let ciphertext = CryptoJS.AES.encrypt(plaintext, KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
  return ciphertext
}

/**
 * AES 解密
 * @param jsonStr
 */
export const AES_Decrypt = (jsonStr: string | CryptoJS.lib.CipherParams, key = KEY_d) => {
  const KEY = CryptoJS.enc.Utf8.parse(key);
  let plaintext = CryptoJS.AES.decrypt(jsonStr, KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8)
  return plaintext
}