//Wed Aug 28 2024 09:18:17 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    sign: _0x345a24,
    getToken: _0x45dbce,
    wait: _0x31727b,
    checkCk: _0x24df8f,
    validateCarmeWithType: _0xada201,
    User_Agent: _0x5c44f9,
    getCookies: _0x476256,
    checkCarmeCount: _0x345f5f,
    getUserInfo: _0x441016,
    tryCatchPromise: _0x43bcbb,
    getCookieMap: _0x40c988
  } = require("./common.js"),
  {
    sendNotify: _0x39cddc
  } = require("./ele_sendNotify.js"),
  _0x56ad06 = require("moment"),
  _0x3b5f4c = require("request"),
  _0x5689d6 = 10,
  _0x595a6e = "异常";
let _0x177be8 = _0x476256();
const _0x43f1c9 = process.env.ELE_CARME;
var _0x57e749 = "| 昵称          | 乐园币    | 总吃货豆 |余额 |\n| ------------- | ------------------ | ---------|---------|\n";
function _0x27958f() {
  return _0x56ad06().format("YYYY-MM-DD");
}
function _0x26ce07() {
  var _0x52e171 = new Date(),
    _0x536da4 = _0x52e171.getMonth() + 1,
    _0x26e203 = _0x52e171.getDate();
  return _0x536da4 <= 9 && (_0x536da4 = "0" + _0x536da4), _0x26e203 <= 9 && (_0x26e203 = "0" + _0x26e203), _0x52e171.getFullYear() + "-" + _0x536da4 + "-" + _0x26e203;
}
function _0xa3b67(_0x3196b4) {
  const _0x2be4e7 = {
    "url": "https://httpizza.ele.me/walletUserV2/storedcard/queryBalanceBycardType?cardType=platform",
    "headers": {}
  };
  return _0x2be4e7.headers.Cookie = _0x3196b4, _0x2be4e7.headers["User-Agent"] = _0x5c44f9, _0x2be4e7.headers.referer = "https://r.ele.me/alsc-wallet/home.html?channel=grzx", _0x43bcbb(_0x59c2ae => {
    _0x3b5f4c(_0x2be4e7, async (_0x796d7c, _0x381a38, _0x5f089e) => {
      if (!_0x796d7c && _0x381a38.statusCode == 200) try {
        const _0x1a25b6 = JSON.parse(_0x5f089e),
          _0x931847 = _0x1a25b6.data.totalAmount;
        _0x59c2ae(_0x931847);
      } catch (_0x2d94d1) {
        console.log("Error parsing response:", _0x5f089e);
        _0x59c2ae(null);
      } else console.log("Request failed:", _0x796d7c), _0x59c2ae(null);
    });
  });
}
function _0x2fe9d1(_0xf448b) {
  const _0x379ad7 = {
      "Cookie": _0xf448b,
      "User-Agent": _0x5c44f9
    },
    _0x2e5fdc = {
      "url": "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?latitude=30.153352&limit=20&longitude=104.153352&offset=0",
      "headers": _0x379ad7
    };
  return _0x43bcbb(_0x30da15 => {
    _0x3b5f4c(_0x2e5fdc, async (_0xe8e101, _0x169c3c, _0x10aa1a) => {
      if (!_0xe8e101 && _0x169c3c.statusCode == 200) {
        const _0x53d987 = JSON.parse(_0x10aa1a);
        try {
          _0x30da15(_0x53d987.peaCount);
        } catch (_0x366405) {
          console.log(_0x10aa1a);
          _0x30da15(null);
        }
      } else _0x30da15(null);
    });
  });
}
async function _0x95a90d(_0x3195a7) {
  const _0x2f2e38 = {
    "content-type": "application/json",
    "Cookie": _0x3195a7,
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36"
  };
  s = _0x2f2e38;
  r = "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?offset=0&limit=100&longitude=39.916527&latitude=116.397128";
  const _0x5a3d03 = {
    "url": r,
    "headers": s
  };
  return _0x43bcbb(_0xf4e9ca => {
    _0x3b5f4c(_0x5a3d03, async (_0x54811c, _0x1874af, _0x4d0212) => {
      if (!_0x54811c && _0x1874af.statusCode == 200) {
        const _0x35ca39 = JSON.parse(_0x4d0212);
        try {
          for (var _0x540bcd = _0x26ce07(), _0x532982 = _0x35ca39.records, _0x4230cc = 0, _0xaacbc6 = 0; _0xaacbc6 < _0x532982.length; _0xaacbc6++) {
            _0x532982[_0xaacbc6].createdTime.indexOf(_0x540bcd) > -1 && 1 == _0x532982[_0xaacbc6].optType && (_0x4230cc += _0x532982[_0xaacbc6].count);
          }
          _0xf4e9ca(_0x4230cc);
        } catch (_0x2ded39) {
          console.log(_0x4d0212);
          _0xf4e9ca(null);
        }
      } else _0xf4e9ca(null);
    });
  });
}
async function _0x40a6d5(_0x204e41) {}
async function _0x5a7ad3(_0x212a9c, _0xb29f92) {
  const _0x4bfc15 = {
      "authority": "shopping.ele.me",
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "origin": "https://r.ele.me",
      "pragma": "no-cache",
      "referer": "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
      "cookie": _0x212a9c,
      "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
      "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    },
    _0xdc7ce9 = new Date().getTime(),
    _0x3989ad = 12574478;
  var _0xf66b12 = "data=" + encodeURIComponent(JSON.stringify(_0xb29f92));
  const _0x37c4f5 = _0x45dbce(_0x212a9c),
    _0x4ccfdb = _0x37c4f5.split("_")[0],
    _0x59c037 = await _0x345a24(_0x4ccfdb + "&" + _0xdc7ce9 + "&" + _0x3989ad + "&" + JSON.stringify(_0xb29f92), _0x43f1c9),
    _0x3241b1 = {
      "url": "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0xdc7ce9 + "&sign=" + _0x59c037 + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
      "method": "POST",
      "headers": _0x4bfc15,
      "body": _0xf66b12
    };
  return _0x43bcbb(_0x3543e7 => {
    _0x3b5f4c(_0x3241b1, async (_0x109b2e, _0x310237, _0x5691fe) => {
      if (!_0x109b2e && _0x310237.statusCode == 200) try {
        const _0x7c58b1 = JSON.parse(_0x5691fe),
          _0x6fd124 = JSON.parse(_0x7c58b1.data.data);
        _0x3543e7(_0x6fd124);
      } catch (_0x5b9218) {
        console.log(_0x5691fe);
        _0x3543e7(null);
      } else {
        _0x3543e7(null);
      }
    });
  });
}
async function _0x236d54(_0x4648e6, _0x2226f5) {
  const _0x3451ea = {
      "authority": "mtop.ele.me",
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "cookie": _0x4648e6,
      "origin": "https://tb.ele.me",
      "pragma": "no-cache",
      "referer": "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
      "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    },
    _0x804dc2 = {
      "templateId": "1404",
      "bizScene": "game_center",
      "convertType": "GAME_CENTER",
      "startTime": _0x27958f() + " 00:00:00",
      "pageNo": _0x2226f5,
      "pageSize": "20"
    },
    _0x477c8b = new Date().getTime(),
    _0x47a738 = 12574478;
  var _0x56cd63 = "data=" + encodeURIComponent(JSON.stringify(_0x804dc2));
  const _0x270fe8 = _0x45dbce(_0x4648e6),
    _0x226e57 = _0x270fe8.split("_")[0],
    _0x5d400f = await _0x345a24(_0x226e57 + "&" + _0x477c8b + "&" + _0x47a738 + "&" + JSON.stringify(_0x804dc2), _0x43f1c9),
    _0x35163e = {
      "url": "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.querypropertydetail/1.0/?jsv=2.7.1&appKey=12574478&t=" + _0x477c8b + "&sign=" + _0x5d400f + "&api=mtop.koubei.interaction.center.common.querypropertydetail&v=1.0",
      "method": "POST",
      "headers": _0x3451ea,
      "body": _0x56cd63
    };
  return _0x43bcbb(_0x5e95b0 => {
    _0x3b5f4c(_0x35163e, async (_0x4bf679, _0x187a02, _0x4c5437) => {
      if (!_0x4bf679 && _0x187a02.statusCode === 200) {
        const _0x44f0f3 = JSON.parse(_0x4c5437);
        try {
          if (_0x44f0f3.data) {
            var _0x20aeeb = 0;
            for (let _0x59d98b = 0; _0x59d98b < _0x44f0f3.data.list.length; _0x59d98b++) {
              const _0x5e459f = _0x44f0f3.data.list[_0x59d98b];
              _0x5e459f.detailType === "GRANT" && _0x5e459f.gmtModified.indexOf(_0x27958f()) !== -1 && (_0x20aeeb += Number(_0x5e459f.amount));
            }
          }
          _0x5e95b0(_0x20aeeb);
        } catch (_0x558a66) {
          console.log(_0x4c5437);
        }
        _0x5e95b0(_0x44f0f3);
      } else _0x5e95b0(null);
    });
  });
}
async function _0x1f4c94(_0x4b956e) {
  const _0x41a8eb = {
      "authority": "mtop.ele.me",
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "cookie": _0x4b956e,
      "origin": "https://tb.ele.me",
      "pragma": "no-cache",
      "referer": "https://tb.ele.me/wow/alsc/mod/3fe8408d9ba38d4726448a87?geohash=wssuj22rzrwn&spm-pre=a2ogi.13684611.0.0&spm=a13.b_activity_kb_m71293.0.0",
      "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    },
    _0x7cff52 = {
      "templateIds": "[\"1404\"]"
    },
    _0x376194 = new Date().getTime(),
    _0x44c454 = 12574478;
  var _0x404cb9 = "data=" + encodeURIComponent(JSON.stringify(_0x7cff52));
  const _0x135638 = _0x45dbce(_0x4b956e),
    _0x394d4f = _0x135638.split("_")[0],
    _0x21e0f1 = await _0x345a24(_0x394d4f + "&" + _0x376194 + "&" + _0x44c454 + "&" + JSON.stringify(_0x7cff52), _0x43f1c9),
    _0x5df34d = {
      "url": "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.queryintegralproperty.v2/1.0/5.0/?jsv=2.7.2&appKey=12574478&t=" + _0x376194 + "&sign=" + _0x21e0f1 + "&api=mtop.koubei.interaction.center.common.queryintegralproperty.v2&v=1.0",
      "method": "POST",
      "headers": _0x41a8eb,
      "body": _0x404cb9
    };
  return _0x43bcbb(_0x498750 => {
    _0x3b5f4c(_0x5df34d, async (_0x3cd2b3, _0x2cdd16, _0x513a77) => {
      if (!_0x3cd2b3 && _0x2cdd16.statusCode === 200) {
        try {
          const _0x197119 = JSON.parse(_0x513a77);
          if (_0x197119.data && _0x197119.data.data) {
            const _0x44a9a8 = _0x197119.data.data["1404"]?.["count"] || 0;
            _0x498750(_0x44a9a8);
          } else _0x498750(0);
        } catch (_0x4bb51e) {
          console.log("Error parsing response:", _0x513a77);
          _0x498750(0);
        }
      } else _0x498750(0);
    });
  });
}
async function _0x2a0a31(_0x2d24b8, _0x99ae19) {
  const _0x170263 = _0x40c988(_0x2d24b8);
  if (!_0x170263.has("wxUid")) {
    console.log("没有获取到推送 uid，不推送消息\n");
  } else await _0x39cddc("饿了么资产推送", _0x99ae19, {
    "uid": _0x170263.get("wxUid")
  });
}
async function _0x135f69() {
  await _0xada201(_0x43f1c9, 1);
  for (let _0x4c23e3 = 0; _0x4c23e3 < _0x177be8.length; _0x4c23e3++) {
    let _0x595b44 = _0x177be8[_0x4c23e3];
    _0x595b44 = await _0x24df8f(_0x595b44);
    if (!_0x595b44) continue;
    let _0x4c6059 = await _0x441016(_0x595b44);
    if (!_0x4c6059.username) {
      console.log("第", _0x4c23e3 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    const _0x4a7c4 = _0x4c6059.user_id;
    await _0x345f5f(_0x43f1c9, _0x4a7c4, _0x5689d6);
    console.log("******开始【饿了么账号", _0x4c23e3 + 1, "】", _0x4c6059.username, "*********");
    let _0x5f425a = await _0xa3b67(_0x595b44);
    _0x5f425a == null ? _0x5f425a = _0x595a6e : _0x5f425a = _0x5f425a / 100;
    let _0x3a3241 = await _0x2fe9d1(_0x595b44);
    if (!_0x3a3241) {
      _0x3a3241 = _0x595a6e;
    }
    let _0x34e6e0 = await _0x236d54(_0x595b44, 1);
    await _0x31727b(1);
    let _0x4792c8 = await _0x236d54(_0x595b44, 2);
    await _0x31727b(1);
    let _0x2dc7a3 = await _0x236d54(_0x595b44, 3);
    await _0x31727b(1);
    let _0xc116aa = await _0x236d54(_0x595b44, 4);
    await _0x31727b(1);
    let _0x18acdb = await _0x236d54(_0x595b44, 5),
      _0x75a9e4 = _0x34e6e0 + _0x4792c8 + _0x2dc7a3 + _0xc116aa + _0x18acdb;
    !_0x75a9e4 && (_0x75a9e4 = _0x595a6e);
    var _0x5f58a2 = await _0x1f4c94(_0x595b44);
    !_0x5f58a2 && (_0x5f58a2 = _0x595a6e);
    let _0x186560 = _0x4c6059.mobile.substring(0, 3) + "****" + _0x4c6059.mobile.substring(7);
    console.log("手机号：" + _0x186560);
    console.log("今日共获得乐园币：" + _0x75a9e4);
    console.log("账户总乐园币：" + _0x5f58a2);
    console.log("总吃货豆：" + _0x3a3241);
    console.log("余额：" + _0x5f425a);
    var _0x16cbb1 = "###资产推送\n" + _0x57e749 + "|" + _0x4c6059.username + "|" + _0x75a9e4 + "/" + _0x5f58a2 + "|" + _0x3a3241 + "|" + _0x5f425a + "|";
    await _0x2a0a31(_0x595b44, _0x16cbb1);
    await _0x31727b(10);
  }
  process.exit(0);
}
_0x135f69();
function _0x15f6da(_0x2da3bd, _0x147ad3) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0xcbb96b {
    constructor(_0x384445) {
      this.env = _0x384445;
    }
    ["send"](_0x1ef428, _0x5b4215 = "GET") {
      _0x1ef428 = "string" == typeof _0x1ef428 ? {
        "url": _0x1ef428
      } : _0x1ef428;
      let _0x1708f1 = this.get;
      return "POST" === _0x5b4215 && (_0x1708f1 = this.post), new Promise((_0x311f99, _0xd0c7cf) => {
        _0x1708f1.call(this, _0x1ef428, (_0xf733c6, _0x1723c8, _0x4ca0ea) => {
          _0xf733c6 ? _0xd0c7cf(_0xf733c6) : _0x311f99(_0x1723c8);
        });
      });
    }
    ["get"](_0x304ed6) {
      return this.send.call(this.env, _0x304ed6);
    }
    ["post"](_0x4af82f) {
      return this.send.call(this.env, _0x4af82f, "POST");
    }
  }
  return new class {
    constructor(_0x384fe9, _0x3bd770) {
      this.name = _0x384fe9;
      this.http = new _0xcbb96b(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3bd770);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x354d8e, _0x3a29ce = null) {
      try {
        return JSON.parse(_0x354d8e);
      } catch {
        return _0x3a29ce;
      }
    }
    ["toStr"](_0xc01567, _0x3ea6c9 = null) {
      try {
        return JSON.stringify(_0xc01567);
      } catch {
        return _0x3ea6c9;
      }
    }
    ["getjson"](_0x47bb39, _0x58c951) {
      let _0x4c6255 = _0x58c951;
      const _0x4278f6 = this.getdata(_0x47bb39);
      if (_0x4278f6) try {
        _0x4c6255 = JSON.parse(this.getdata(_0x47bb39));
      } catch {}
      return _0x4c6255;
    }
    ["setjson"](_0x1095e9, _0x5d7b5c) {
      try {
        return this.setdata(JSON.stringify(_0x1095e9), _0x5d7b5c);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x2e80bb) {
      return new Promise(_0x350415 => {
        this.get({
          "url": _0x2e80bb
        }, (_0x4d44c1, _0x586ee7, _0x2fef13) => _0x350415(_0x2fef13));
      });
    }
    ["runScript"](_0x17bdbe, _0x3bac17) {
      return new Promise(_0x5b4172 => {
        let _0x395b6d = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x395b6d = _0x395b6d ? _0x395b6d.replace(/\n/g, "").trim() : _0x395b6d;
        let _0x89d1e2 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x89d1e2 = _0x89d1e2 ? 1 * _0x89d1e2 : 20;
        _0x89d1e2 = _0x3bac17 && _0x3bac17.timeout ? _0x3bac17.timeout : _0x89d1e2;
        const [_0x54d9c2, _0x341aad] = _0x395b6d.split("@"),
          _0x42373f = {
            "url": "http://" + _0x341aad + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x17bdbe,
              "mock_type": "cron",
              "timeout": _0x89d1e2
            },
            "headers": {
              "X-Key": _0x54d9c2,
              "Accept": "*/*"
            }
          };
        this.post(_0x42373f, (_0x24000d, _0x37d8d7, _0xe186dc) => _0x5b4172(_0xe186dc));
      }).catch(_0x384da1 => this.logErr(_0x384da1));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x8598ab = this.path.resolve(this.dataFile),
          _0x34e2b5 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4dd49b = this.fs.existsSync(_0x8598ab),
          _0x5b01c7 = !_0x4dd49b && this.fs.existsSync(_0x34e2b5);
        if (!_0x4dd49b && !_0x5b01c7) return {};
        {
          const _0x41886b = _0x4dd49b ? _0x8598ab : _0x34e2b5;
          try {
            return JSON.parse(this.fs.readFileSync(_0x41886b));
          } catch (_0x10ffcf) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x366159 = this.path.resolve(this.dataFile),
          _0x206a65 = this.path.resolve(process.cwd(), this.dataFile),
          _0x9c3cf6 = this.fs.existsSync(_0x366159),
          _0x2c5d20 = !_0x9c3cf6 && this.fs.existsSync(_0x206a65),
          _0x268d55 = JSON.stringify(this.data);
        _0x9c3cf6 ? this.fs.writeFileSync(_0x366159, _0x268d55) : _0x2c5d20 ? this.fs.writeFileSync(_0x206a65, _0x268d55) : this.fs.writeFileSync(_0x366159, _0x268d55);
      }
    }
    ["lodash_get"](_0x4e3d8d, _0x40fc63, _0x49a1e1) {
      const _0x75446b = _0x40fc63.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x347443 = _0x4e3d8d;
      for (const _0x296445 of _0x75446b) if (_0x347443 = Object(_0x347443)[_0x296445], void 0 === _0x347443) return _0x49a1e1;
      return _0x347443;
    }
    ["lodash_set"](_0x4c527f, _0x2c2b79, _0x102e83) {
      return Object(_0x4c527f) !== _0x4c527f ? _0x4c527f : (Array.isArray(_0x2c2b79) || (_0x2c2b79 = _0x2c2b79.toString().match(/[^.[\]]+/g) || []), _0x2c2b79.slice(0, -1).reduce((_0x294367, _0x84fe0e, _0x56e94e) => Object(_0x294367[_0x84fe0e]) === _0x294367[_0x84fe0e] ? _0x294367[_0x84fe0e] : _0x294367[_0x84fe0e] = Math.abs(_0x2c2b79[_0x56e94e + 1]) >> 0 == +_0x2c2b79[_0x56e94e + 1] ? [] : {}, _0x4c527f)[_0x2c2b79[_0x2c2b79.length - 1]] = _0x102e83, _0x4c527f);
    }
    ["getdata"](_0x7d7761) {
      let _0x579fb7 = this.getval(_0x7d7761);
      if (/^@/.test(_0x7d7761)) {
        const [, _0x5c8497, _0x6449f7] = /^@(.*?)\.(.*?)$/.exec(_0x7d7761),
          _0x4cf626 = _0x5c8497 ? this.getval(_0x5c8497) : "";
        if (_0x4cf626) try {
          const _0x4c17ed = JSON.parse(_0x4cf626);
          _0x579fb7 = _0x4c17ed ? this.lodash_get(_0x4c17ed, _0x6449f7, "") : _0x579fb7;
        } catch (_0x20e4a4) {
          _0x579fb7 = "";
        }
      }
      return _0x579fb7;
    }
    ["setdata"](_0x33e2f8, _0x5ad48d) {
      let _0x226362 = false;
      if (/^@/.test(_0x5ad48d)) {
        const [, _0x355d41, _0x253366] = /^@(.*?)\.(.*?)$/.exec(_0x5ad48d),
          _0x633023 = this.getval(_0x355d41),
          _0x69cc27 = _0x355d41 ? "null" === _0x633023 ? null : _0x633023 || "{}" : "{}";
        try {
          const _0x27f383 = JSON.parse(_0x69cc27);
          this.lodash_set(_0x27f383, _0x253366, _0x33e2f8);
          _0x226362 = this.setval(JSON.stringify(_0x27f383), _0x355d41);
        } catch (_0x188bdd) {
          const _0x3e0500 = {};
          this.lodash_set(_0x3e0500, _0x253366, _0x33e2f8);
          _0x226362 = this.setval(JSON.stringify(_0x3e0500), _0x355d41);
        }
      } else _0x226362 = this.setval(_0x33e2f8, _0x5ad48d);
      return _0x226362;
    }
    ["getval"](_0x566787) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x566787) : this.isQuanX() ? $prefs.valueForKey(_0x566787) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x566787]) : this.data && this.data[_0x566787] || null;
    }
    ["setval"](_0x3764aa, _0x219003) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x3764aa, _0x219003) : this.isQuanX() ? $prefs.setValueForKey(_0x3764aa, _0x219003) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x219003] = _0x3764aa, this.writedata(), !0) : this.data && this.data[_0x219003] || null;
    }
    ["initGotEnv"](_0x2036ff) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x2036ff && (_0x2036ff.headers = _0x2036ff.headers ? _0x2036ff.headers : {}, void 0 === _0x2036ff.headers.Cookie && void 0 === _0x2036ff.cookieJar && (_0x2036ff.cookieJar = this.ckjar));
    }
    ["get"](_0x5771be, _0xead8cc = () => {}) {
      _0x5771be.headers && (delete _0x5771be.headers["Content-Type"], delete _0x5771be.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x5771be.headers = _0x5771be.headers || {}, Object.assign(_0x5771be.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x5771be, (_0x5c7510, _0x1944c2, _0x1e327d) => {
        !_0x5c7510 && _0x1944c2 && (_0x1944c2.body = _0x1e327d, _0x1944c2.statusCode = _0x1944c2.status);
        _0xead8cc(_0x5c7510, _0x1944c2, _0x1e327d);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x5771be.opts = _0x5771be.opts || {}, Object.assign(_0x5771be.opts, {
        "hints": !1
      })), $task.fetch(_0x5771be).then(_0x51e9c1 => {
        const {
          statusCode: _0x405b04,
          statusCode: _0x4d827b,
          headers: _0x4e3a18,
          body: _0x429640
        } = _0x51e9c1;
        _0xead8cc(null, {
          "status": _0x405b04,
          "statusCode": _0x4d827b,
          "headers": _0x4e3a18,
          "body": _0x429640
        }, _0x429640);
      }, _0x2b55f9 => _0xead8cc(_0x2b55f9))) : this.isNode() && (this.initGotEnv(_0x5771be), this.got(_0x5771be).on("redirect", (_0x45186c, _0x14d01f) => {
        try {
          if (_0x45186c.headers["set-cookie"]) {
            const _0x5c4e4a = _0x45186c.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x5c4e4a && this.ckjar.setCookieSync(_0x5c4e4a, null);
            _0x14d01f.cookieJar = this.ckjar;
          }
        } catch (_0x1d6a1f) {
          this.logErr(_0x1d6a1f);
        }
      }).then(_0x2cb107 => {
        const {
          statusCode: _0x9d4a35,
          statusCode: _0x90b3fc,
          headers: _0x50e57d,
          body: _0x31abcb
        } = _0x2cb107;
        _0xead8cc(null, {
          "status": _0x9d4a35,
          "statusCode": _0x90b3fc,
          "headers": _0x50e57d,
          "body": _0x31abcb
        }, _0x31abcb);
      }, _0x41f22a => {
        const {
          message: _0x199a96,
          response: _0x93a91
        } = _0x41f22a;
        _0xead8cc(_0x199a96, _0x93a91, _0x93a91 && _0x93a91.body);
      }));
    }
    ["post"](_0x14c9c8, _0x423293 = () => {}) {
      if (_0x14c9c8.body && _0x14c9c8.headers && !_0x14c9c8.headers["Content-Type"] && (_0x14c9c8.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x14c9c8.headers && delete _0x14c9c8.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x14c9c8.headers = _0x14c9c8.headers || {}, Object.assign(_0x14c9c8.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x14c9c8, (_0x5e339a, _0x21055f, _0x2585e3) => {
        !_0x5e339a && _0x21055f && (_0x21055f.body = _0x2585e3, _0x21055f.statusCode = _0x21055f.status);
        _0x423293(_0x5e339a, _0x21055f, _0x2585e3);
      });else {
        if (this.isQuanX()) {
          _0x14c9c8.method = "POST";
          this.isNeedRewrite && (_0x14c9c8.opts = _0x14c9c8.opts || {}, Object.assign(_0x14c9c8.opts, {
            "hints": !1
          }));
          $task.fetch(_0x14c9c8).then(_0x487665 => {
            const {
              statusCode: _0x453aac,
              statusCode: _0x5547b5,
              headers: _0x16fcee,
              body: _0x284bb8
            } = _0x487665;
            _0x423293(null, {
              "status": _0x453aac,
              "statusCode": _0x5547b5,
              "headers": _0x16fcee,
              "body": _0x284bb8
            }, _0x284bb8);
          }, _0x149528 => _0x423293(_0x149528));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x14c9c8);
            const {
              url: _0x4a1f7c,
              ..._0x231927
            } = _0x14c9c8;
            this.got.post(_0x4a1f7c, _0x231927).then(_0x5ed942 => {
              const {
                statusCode: _0x27b53f,
                statusCode: _0x398e58,
                headers: _0x13955e,
                body: _0x556914
              } = _0x5ed942;
              _0x423293(null, {
                "status": _0x27b53f,
                "statusCode": _0x398e58,
                "headers": _0x13955e,
                "body": _0x556914
              }, _0x556914);
            }, _0x11bfaf => {
              const {
                message: _0x53d6cc,
                response: _0x68b78c
              } = _0x11bfaf;
              _0x423293(_0x53d6cc, _0x68b78c, _0x68b78c && _0x68b78c.body);
            });
          }
        }
      }
    }
    ["time"](_0x182ede, _0x32403b = null) {
      const _0x1d6d9d = _0x32403b ? new Date(_0x32403b) : new Date();
      let _0x380074 = {
        "M+": _0x1d6d9d.getMonth() + 1,
        "d+": _0x1d6d9d.getDate(),
        "H+": _0x1d6d9d.getHours(),
        "m+": _0x1d6d9d.getMinutes(),
        "s+": _0x1d6d9d.getSeconds(),
        "q+": Math.floor((_0x1d6d9d.getMonth() + 3) / 3),
        "S": _0x1d6d9d.getMilliseconds()
      };
      /(y+)/.test(_0x182ede) && (_0x182ede = _0x182ede.replace(RegExp.$1, (_0x1d6d9d.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0xa1190a in _0x380074) new RegExp("(" + _0xa1190a + ")").test(_0x182ede) && (_0x182ede = _0x182ede.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x380074[_0xa1190a] : ("00" + _0x380074[_0xa1190a]).substr(("" + _0x380074[_0xa1190a]).length)));
      return _0x182ede;
    }
    ["msg"](_0x239417 = _0x2da3bd, _0x146199 = "", _0x5c19d1 = "", _0x208cfc) {
      const _0x4b521e = _0x2d34f8 => {
        if (!_0x2d34f8) {
          return _0x2d34f8;
        }
        if ("string" == typeof _0x2d34f8) {
          return this.isLoon() ? _0x2d34f8 : this.isQuanX() ? {
            "open-url": _0x2d34f8
          } : this.isSurge() ? {
            "url": _0x2d34f8
          } : void 0;
        }
        if ("object" == typeof _0x2d34f8) {
          if (this.isLoon()) {
            let _0x3288c6 = _0x2d34f8.openUrl || _0x2d34f8.url || _0x2d34f8["open-url"],
              _0x2502c7 = _0x2d34f8.mediaUrl || _0x2d34f8["media-url"];
            return {
              "openUrl": _0x3288c6,
              "mediaUrl": _0x2502c7
            };
          }
          if (this.isQuanX()) {
            let _0x4a7d63 = _0x2d34f8["open-url"] || _0x2d34f8.url || _0x2d34f8.openUrl,
              _0x5f5bef = _0x2d34f8["media-url"] || _0x2d34f8.mediaUrl;
            return {
              "open-url": _0x4a7d63,
              "media-url": _0x5f5bef
            };
          }
          if (this.isSurge()) {
            let _0x341a87 = _0x2d34f8.url || _0x2d34f8.openUrl || _0x2d34f8["open-url"];
            return {
              "url": _0x341a87
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x239417, _0x146199, _0x5c19d1, _0x4b521e(_0x208cfc)) : this.isQuanX() && $notify(_0x239417, _0x146199, _0x5c19d1, _0x4b521e(_0x208cfc))), !this.isMuteLog) {
        let _0xbfc20c = ["", "==============📣系统通知📣=============="];
        _0xbfc20c.push(_0x239417);
        _0x146199 && _0xbfc20c.push(_0x146199);
        _0x5c19d1 && _0xbfc20c.push(_0x5c19d1);
        console.log(_0xbfc20c.join("\n"));
        this.logs = this.logs.concat(_0xbfc20c);
      }
    }
    ["log"](..._0x5c2d3a) {
      _0x5c2d3a.length > 0 && (this.logs = [...this.logs, ..._0x5c2d3a]);
      console.log(_0x5c2d3a.join(this.logSeparator));
    }
    ["logErr"](_0x2cecf0, _0xdea15c) {
      const _0x3b6bea = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x3b6bea ? this.log("", "❗️" + this.name + ", 错误!", _0x2cecf0.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x2cecf0);
    }
    ["wait"](_0x343a74) {
      return new Promise(_0x2f6967 => setTimeout(_0x2f6967, _0x343a74));
    }
    ["done"](_0x3c274f = {}) {
      const _0xb79d0a = new Date().getTime(),
        _0x581aa5 = (_0xb79d0a - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x581aa5 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x3c274f);
    }
  }(_0x2da3bd, _0x147ad3);
}