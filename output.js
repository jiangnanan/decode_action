//Tue Aug 27 2024 01:38:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("\u997F\u4E86\u4E48\u8D44\u4EA7\u63A8\u9001");
const {
  sign,
  getToken,
  wait,
  checkCk,
  validateCarmeWithType,
  User_Agent,
  getCookies,
  checkCarmeCount,
  getUserInfo,
  tryCatchPromise,
  getCookieMap
} = require("./common.js");
const {
  sendNotify
} = require("./ele_sendNotify.js");
const _0x3ee842 = require("moment");
const _0x43a291 = require("request");
const _0xf58a19 = 10;
const _0x55733f = "\u5F02\u5E38";
let _0x31839a = getCookies();
const _0x46e8ae = process["env"]["ELE_CARME"];
var _0x2c5f85 = "| \u6635\u79F0          | \u4E50\u56ED\u5E01    | \u603B\u5403\u8D27\u8C46 |\u4F59\u989D |\n| ------------- | ------------------ | ---------|---------|\n";
function _0x15e7a0() {
  return _0x3ee842()["format"]("YYYY-MM-DD");
}
function _0x23f651() {
  var _0x22d206 = new Date(),
    _0x2d1f78 = _0x22d206["getMonth"]() + 1,
    _0x19669f = _0x22d206["getDate"]();
  _0x2d1f78 <= 9 && (_0x2d1f78 = "0" + _0x2d1f78);
  _0x19669f <= 9 && (_0x19669f = "0" + _0x19669f);
  return _0x22d206["getFullYear"]() + "-" + _0x2d1f78 + "-" + _0x19669f;
}
function _0x1fb425(_0x28ba91) {
  const _0x5b3fdf = {
    "url": "https://httpizza.ele.me/walletUserV2/storedcard/queryBalanceBycardType?cardType=platform",
    "headers": {}
  };
  _0x5b3fdf["headers"]["Cookie"] = _0x28ba91;
  _0x5b3fdf["headers"]["User-Agent"] = User_Agent;
  _0x5b3fdf["headers"]["referer"] = "https://r.ele.me/alsc-wallet/home.html?channel=grzx";
  return tryCatchPromise(_0x1faf94 => {
    _0x43a291(_0x5b3fdf, async (_0x25522d, _0x22d35a, _0xf0030) => {
      if (!_0x25522d && _0x22d35a["statusCode"] == 200) {
        try {
          const _0x3b7090 = JSON["parse"](_0xf0030);
          const _0x4ca75e = _0x3b7090["data"]["totalAmount"];
          _0x1faf94(_0x4ca75e);
        } catch (_0x219e14) {
          console["log"]("Error parsing response:", _0xf0030);
          _0x1faf94(null);
        }
      } else {
        console["log"]("Request failed:", _0x25522d);
        _0x1faf94(null);
      }
    });
  });
}
function _0xe7326c(_0x551aa0) {
  const _0x5c5076 = {
    "Cookie": _0x551aa0,
    "User-Agent": User_Agent
  };
  const _0x1a322d = {
    "url": "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?latitude=30.153352&limit=20&longitude=104.153352&offset=0",
    "headers": _0x5c5076
  };
  return tryCatchPromise(_0x51f515 => {
    _0x43a291(_0x1a322d, async (_0x2deea0, _0x136706, _0x47a7f7) => {
      if (!_0x2deea0 && _0x136706["statusCode"] == 200) {
        const _0x1a853c = JSON["parse"](_0x47a7f7);
        try {
          _0x51f515(_0x1a853c["peaCount"]);
        } catch (_0x55f9e7) {
          console["log"](_0x47a7f7);
          _0x51f515(null);
        }
      } else {
        _0x51f515(null);
      }
    });
  });
}
async function _0xc1502e(_0x2a72a5) {
  const _0x20a42b = {
    "content-type": "application/json",
    "Cookie": _0x2a72a5,
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36"
  };
  s = _0x20a42b;
  r = "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?offset=0&limit=100&longitude=39.916527&latitude=116.397128";
  const _0x4acbbd = {
    "url": r,
    "headers": s
  };
  return tryCatchPromise(_0x1fe73c => {
    _0x43a291(_0x4acbbd, async (_0x5404f4, _0x7077f3, _0x2d3c54) => {
      if (!_0x5404f4 && _0x7077f3["statusCode"] == 200) {
        const _0x11f486 = JSON["parse"](_0x2d3c54);
        try {
          for (var _0x30075f = _0x23f651(), _0x2ccf82 = _0x11f486["records"], _0xe88ee0 = 0, _0x44d62a = 0; _0x44d62a < _0x2ccf82["length"]; _0x44d62a++) {
            _0x2ccf82[_0x44d62a]["createdTime"]["indexOf"](_0x30075f) > -1 && 1 == _0x2ccf82[_0x44d62a]["optType"] && (_0xe88ee0 += _0x2ccf82[_0x44d62a]["count"]);
          }
          _0x1fe73c(_0xe88ee0);
        } catch (_0x116a0d) {
          console["log"](_0x2d3c54);
          _0x1fe73c(null);
        }
      } else {
        _0x1fe73c(null);
      }
    });
  });
}
async function _0x2e425a(_0x2b0eef) {
  const _0x2bf03e = {
    "bizScene": "IDIOM",
    "bizParam": "{\"type\":\"ggetGold\"}",
    "bizMethod": "queryIndex"
  };
}
async function _0x1df2c9(_0x29869e, _0x35cdc0) {
  const _0x33f685 = {
    "authority": "shopping.ele.me",
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://r.ele.me",
    "pragma": "no-cache",
    "referer": "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    "cookie": _0x29869e,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x23e67a = new Date()["getTime"]();
  const _0x3e81b4 = 12574478;
  var _0x53b4e2 = "data=" + encodeURIComponent(JSON["stringify"](_0x35cdc0));
  const _0x1deb06 = getToken(_0x29869e),
    _0x1069da = _0x1deb06["split"]("_")[0];
  const _0xb4bc4f = await sign(_0x1069da + "&" + _0x23e67a + "&" + _0x3e81b4 + "&" + JSON["stringify"](_0x35cdc0), _0x46e8ae);
  const _0x520ae4 = {
    "url": "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x23e67a + "&sign=" + _0xb4bc4f + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    "method": "POST",
    "headers": _0x33f685,
    "body": _0x53b4e2
  };
  return tryCatchPromise(_0x23c366 => {
    _0x43a291(_0x520ae4, async (_0x212101, _0x2398a4, _0x59762a) => {
      if (!_0x212101 && _0x2398a4["statusCode"] == 200) {
        try {
          const _0x4b012d = JSON["parse"](_0x59762a);
          const _0x7e7291 = JSON["parse"](_0x4b012d["data"]["data"]);
          _0x23c366(_0x7e7291);
        } catch (_0x85bb33) {
          console["log"](_0x59762a);
          _0x23c366(null);
        }
      } else {
        _0x23c366(null);
      }
    });
  });
}
async function _0xf7ccac(_0x15a573, _0x2634fd) {
  const _0x389dad = {
    "authority": "mtop.ele.me",
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": _0x15a573,
    "origin": "https://tb.ele.me",
    "pragma": "no-cache",
    "referer": "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x4359b7 = {
    "templateId": "1404",
    "bizScene": "game_center",
    "convertType": "GAME_CENTER",
    "startTime": _0x15e7a0() + " 00:00:00",
    "pageNo": _0x2634fd,
    "pageSize": "20"
  };
  const _0x4900f3 = new Date()["getTime"]();
  const _0x1abd3f = 12574478;
  var _0x2a67cb = "data=" + encodeURIComponent(JSON["stringify"](_0x4359b7));
  const _0x2c4ca2 = getToken(_0x15a573),
    _0x1f09ec = _0x2c4ca2["split"]("_")[0];
  const _0x4300b5 = await sign(_0x1f09ec + "&" + _0x4900f3 + "&" + _0x1abd3f + "&" + JSON["stringify"](_0x4359b7), _0x46e8ae);
  const _0x4ef7dd = {
    "url": "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.querypropertydetail/1.0/?jsv=2.7.1&appKey=12574478&t=" + _0x4900f3 + "&sign=" + _0x4300b5 + "&api=mtop.koubei.interaction.center.common.querypropertydetail&v=1.0",
    "method": "POST",
    "headers": _0x389dad,
    "body": _0x2a67cb
  };
  return tryCatchPromise(_0x391508 => {
    _0x43a291(_0x4ef7dd, async (_0xd45d, _0x310239, _0x61264e) => {
      if (!_0xd45d && _0x310239["statusCode"] === 200) {
        const _0x429357 = JSON["parse"](_0x61264e);
        try {
          if (_0x429357["data"]) {
            var _0x409681 = 0;
            for (let _0x5cdb1e = 0; _0x5cdb1e < _0x429357["data"]["list"]["length"]; _0x5cdb1e++) {
              const _0x328d56 = _0x429357["data"]["list"][_0x5cdb1e];
              if (_0x328d56["detailType"] === "GRANT" && _0x328d56["gmtModified"]["indexOf"](_0x15e7a0()) !== -1) {
                _0x409681 += Number(_0x328d56["amount"]);
              }
            }
          }
          _0x391508(_0x409681);
        } catch (_0x3952f7) {
          console["log"](_0x61264e);
        }
        _0x391508(_0x429357);
      } else {
        _0x391508(null);
      }
    });
  });
}
async function lybamount(_0x2cfb24) {
  const _0x1b27fc = {
    "authority": "mtop.ele.me",
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": _0x2cfb24,
    "origin": "https://tb.ele.me",
    "pragma": "no-cache",
    "referer": "https://tb.ele.me/wow/alsc/mod/3fe8408d9ba38d4726448a87?geohash=wssuj22rzrwn&spm-pre=a2ogi.13684611.0.0&spm=a13.b_activity_kb_m71293.0.0",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x27f3a6 = {
    "templateIds": "[\"1404\"]"
  };
  const _0x1235a9 = new Date()["getTime"]();
  const _0x511ba9 = 12574478;
  var _0x58e656 = "data=" + encodeURIComponent(JSON["stringify"](_0x27f3a6));
  const _0x318fc8 = getToken(_0x2cfb24),
    _0x315556 = _0x318fc8["split"]("_")[0];
  const _0x5c2840 = await sign(_0x315556 + "&" + _0x1235a9 + "&" + _0x511ba9 + "&" + JSON["stringify"](_0x27f3a6), _0x46e8ae);
  const _0x29f866 = {
    "url": "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.queryintegralproperty.v2/1.0/5.0/?jsv=2.7.2&appKey=12574478&t=" + _0x1235a9 + "&sign=" + _0x5c2840 + "&api=mtop.koubei.interaction.center.common.queryintegralproperty.v2&v=1.0",
    "method": "POST",
    "headers": _0x1b27fc,
    "body": _0x58e656
  };
  return tryCatchPromise(_0x1bb046 => {
    _0x43a291(_0x29f866, async (_0x3598fb, _0x393b16, _0x4610f6) => {
      if (!_0x3598fb && _0x393b16["statusCode"] === 200) {
        try {
          const _0x2e56f0 = JSON["parse"](_0x4610f6);
          if (_0x2e56f0["data"] && _0x2e56f0["data"]["data"]) {
            const _0x314013 = _0x2e56f0["data"]["data"]["1404"]?.["count"] || 0;
            _0x1bb046(_0x314013);
          } else {
            _0x1bb046(0);
          }
        } catch (_0x43cb22) {
          console["log"]("Error parsing response:", _0x4610f6);
          _0x1bb046(0);
        }
      } else {
        _0x1bb046(0);
      }
    });
  });
}
async function _0x378f6c(_0x209c16, _0x29998e) {
  const _0x43d201 = getCookieMap(_0x209c16);
  if (!_0x43d201["has"]("wxUid")) {
    console["log"]("\u6CA1\u6709\u83B7\u53D6\u5230\u63A8\u9001 uid\uFF0C\u4E0D\u63A8\u9001\u6D88\u606F\n");
  } else {
    await sendNotify("\u997F\u4E86\u4E48\u8D44\u4EA7\u63A8\u9001", _0x29998e, {
      "uid": _0x43d201["get"]("wxUid")
    });
  }
}
async function _0x163ae7() {
  await validateCarmeWithType(_0x46e8ae, 1);
  for (let _0x676fec = 0; _0x676fec < _0x31839a["length"]; _0x676fec++) {
    let _0x59643b = _0x31839a[_0x676fec];
    _0x59643b = await checkCk(_0x59643b);
    if (!_0x59643b) {
      continue;
    }
    let _0x10cec3 = await getUserInfo(_0x59643b);
    if (!_0x10cec3["username"]) {
      console["log"]("\u7B2C", _0x676fec + 1, "\u8D26\u53F7\u5931\u6548\uFF01\u8BF7\u91CD\u65B0\u767B\u5F55\uFF01\uFF01\uFF01\uD83D\uDE2D");
      continue;
    }
    const _0xce8ab1 = _0x10cec3["user_id"];
    await checkCarmeCount(_0x46e8ae, _0xce8ab1, _0xf58a19);
    console["log"]("******\u5F00\u59CB\u3010\u997F\u4E86\u4E48\u8D26\u53F7", _0x676fec + 1, "\u3011", _0x10cec3["username"], "\u624B\u673A\u53F7:", _0x10cec3["mobile"], "*********");
    let _0x46c2a2 = await _0x1fb425(_0x59643b);
    if (_0x46c2a2 == null) {
      _0x46c2a2 = _0x55733f;
    } else {
      _0x46c2a2 = _0x46c2a2 / 100;
    }
    let _0x48acb2 = await _0xe7326c(_0x59643b);
    if (!_0x48acb2) {
      _0x48acb2 = _0x55733f;
    }
    let _0x583283 = await _0xf7ccac(_0x59643b, 1);
    await wait(1);
    let _0x3a91e6 = await _0xf7ccac(_0x59643b, 2);
    await wait(1);
    let _0x50903d = await _0xf7ccac(_0x59643b, 3);
    await wait(1);
    let _0x3258a5 = await _0xf7ccac(_0x59643b, 4);
    await wait(1);
    let _0x40ce98 = await _0xf7ccac(_0x59643b, 5);
    let _0x360ed5 = _0x583283 + _0x3a91e6 + _0x50903d + _0x3258a5 + _0x40ce98;
    if (!_0x360ed5) {
      _0x360ed5 = _0x55733f;
    }
    var _0xc15ad5 = await lybamount(_0x59643b);
    if (!_0xc15ad5) {
      _0xc15ad5 = _0x55733f;
    }
    console["log"]("\u4ECA\u65E5\u5171\u83B7\u5F97\u4E50\u56ED\u5E01\uFF1A" + _0x360ed5);
    console["log"]("\u8D26\u6237\u603B\u4E50\u56ED\u5E01\uFF1A" + _0xc15ad5);
    console["log"]("\u603B\u5403\u8D27\u8C46\uFF1A" + _0x48acb2);
    console["log"]("\u4F59\u989D\uFF1A" + _0x46c2a2);
    var _0x557504 = "###\u8D44\u4EA7\u63A8\u9001\n" + _0x2c5f85 + "|" + _0x10cec3["username"] + "|" + _0x360ed5 + "/" + _0xc15ad5 + "|" + _0x48acb2 + "|" + _0x46c2a2 + "|";
    await _0x378f6c(_0x59643b, _0x557504);
    await wait(10);
  }
  process["exit"](0);
}
_0x163ae7();
function Env(_0x3b9ec0, _0x557c50) {
  "undefined" != typeof process && JSON["stringify"](process["env"])["indexOf"]("GITHUB") > -1 && process["exit"](0);
  class _0x53aa6e {
    constructor(_0x101eda) {
      this["env"] = _0x101eda;
    }
    ["send"](_0x37fdf9, _0x3273ae = "GET") {
      _0x37fdf9 = "string" == typeof _0x37fdf9 ? {
        "url": _0x37fdf9
      } : _0x37fdf9;
      let _0x244768 = this["get"];
      "POST" === _0x3273ae && (_0x244768 = this["post"]);
      return new Promise((_0x219324, _0x50eaf5) => {
        _0x244768["call"](this, _0x37fdf9, (_0x7221c9, _0x2581dc, _0x247c14) => {
          _0x7221c9 ? _0x50eaf5(_0x7221c9) : _0x219324(_0x2581dc);
        });
      });
    }
    ["get"](_0x4bc53b) {
      return this["send"]["call"](this["env"], _0x4bc53b);
    }
    ["post"](_0x493a7e) {
      return this["send"]["call"](this["env"], _0x493a7e, "POST");
    }
  }
  return new class {
    constructor(_0x3dd964, _0x5ebc8f) {
      this["name"] = _0x3dd964;
      this["http"] = new _0x53aa6e(this);
      this["data"] = null;
      this["dataFile"] = "box.dat";
      this["logs"] = [];
      this["isMute"] = !1;
      this["isNeedRewrite"] = !1;
      this["logSeparator"] = "\n";
      this["startTime"] = new Date()["getTime"]();
      Object["assign"](this, _0x5ebc8f);
      this["log"]("", "\uD83D\uDD14" + this["name"] + ", \u5F00\u59CB!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module["exports"];
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
    ["toObj"](_0xc24712, _0x33429f = null) {
      try {
        return JSON["parse"](_0xc24712);
      } catch {
        return _0x33429f;
      }
    }
    ["toStr"](_0x4613bf, _0x590254 = null) {
      try {
        return JSON["stringify"](_0x4613bf);
      } catch {
        return _0x590254;
      }
    }
    ["getjson"](_0x358a0b, _0x3a54cb) {
      let _0x83cd25 = _0x3a54cb;
      const _0x112c3d = this["getdata"](_0x358a0b);
      if (_0x112c3d) {
        try {
          _0x83cd25 = JSON["parse"](this["getdata"](_0x358a0b));
        } catch {}
      }
      return _0x83cd25;
    }
    ["setjson"](_0x2e1a6b, _0x2d096c) {
      try {
        return this["setdata"](JSON["stringify"](_0x2e1a6b), _0x2d096c);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x8c8716) {
      return new Promise(_0x350e3 => {
        this["get"]({
          "url": _0x8c8716
        }, (_0x189b26, _0x62e2c6, _0x3b4d74) => _0x350e3(_0x3b4d74));
      });
    }
    ["runScript"](_0x290e72, _0x1134a1) {
      return new Promise(_0x33a760 => {
        let _0x1eb90e = this["getdata"]("@chavy_boxjs_userCfgs.httpapi");
        _0x1eb90e = _0x1eb90e ? _0x1eb90e["replace"](/\n/g, "")["trim"]() : _0x1eb90e;
        let _0x3ccf04 = this["getdata"]("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x3ccf04 = _0x3ccf04 ? 1 * _0x3ccf04 : 20;
        _0x3ccf04 = _0x1134a1 && _0x1134a1["timeout"] ? _0x1134a1["timeout"] : _0x3ccf04;
        const [_0x3cb63a, _0x3c0caa] = _0x1eb90e["split"]("@"),
          _0x53ac06 = {
            "url": "http://" + _0x3c0caa + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x290e72,
              "mock_type": "cron",
              "timeout": _0x3ccf04
            },
            "headers": {
              "X-Key": _0x3cb63a,
              "Accept": "*/*"
            }
          };
        this["post"](_0x53ac06, (_0xa74dd3, _0x757299, _0x4e90e7) => _0x33a760(_0x4e90e7));
      })["catch"](_0x1476d4 => this["logErr"](_0x1476d4));
    }
    ["loaddata"]() {
      if (!this["isNode"]()) {
        return {};
      }
      {
        this["fs"] = this["fs"] ? this["fs"] : require("fs");
        this["path"] = this["path"] ? this["path"] : require("path");
        const _0x10c76e = this["path"]["resolve"](this["dataFile"]),
          _0xff8466 = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
          _0x348759 = this["fs"]["existsSync"](_0x10c76e),
          _0x3bfdc5 = !_0x348759 && this["fs"]["existsSync"](_0xff8466);
        if (!_0x348759 && !_0x3bfdc5) {
          return {};
        }
        {
          const _0x14ae6c = _0x348759 ? _0x10c76e : _0xff8466;
          try {
            return JSON["parse"](this["fs"]["readFileSync"](_0x14ae6c));
          } catch (_0x1eb62b) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this["isNode"]()) {
        this["fs"] = this["fs"] ? this["fs"] : require("fs");
        this["path"] = this["path"] ? this["path"] : require("path");
        const _0x247c0c = this["path"]["resolve"](this["dataFile"]),
          _0x83e981 = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
          _0x17b817 = this["fs"]["existsSync"](_0x247c0c),
          _0x4c2873 = !_0x17b817 && this["fs"]["existsSync"](_0x83e981),
          _0x51ea4b = JSON["stringify"](this["data"]);
        _0x17b817 ? this["fs"]["writeFileSync"](_0x247c0c, _0x51ea4b) : _0x4c2873 ? this["fs"]["writeFileSync"](_0x83e981, _0x51ea4b) : this["fs"]["writeFileSync"](_0x247c0c, _0x51ea4b);
      }
    }
    ["lodash_get"](_0x302bed, _0x1c07c3, _0x25acec) {
      const _0x495d15 = _0x1c07c3["replace"](/\[(\d+)\]/g, ".$1")["split"](".");
      let _0x138580 = _0x302bed;
      for (const _0x4036b0 of _0x495d15) if (_0x138580 = Object(_0x138580)[_0x4036b0], void 0 === _0x138580) {
        return _0x25acec;
      }
      return _0x138580;
    }
    ["lodash_set"](_0x3c2c1b, _0x17c123, _0x2e3d0) {
      return Object(_0x3c2c1b) !== _0x3c2c1b ? _0x3c2c1b : (Array["isArray"](_0x17c123) || (_0x17c123 = _0x17c123["toString"]()["match"](/[^.[\]]+/g) || []), _0x17c123["slice"](0, -1)["reduce"]((_0x1e48d1, _0x4e7055, _0x527c77) => Object(_0x1e48d1[_0x4e7055]) === _0x1e48d1[_0x4e7055] ? _0x1e48d1[_0x4e7055] : _0x1e48d1[_0x4e7055] = Math["abs"](_0x17c123[_0x527c77 + 1]) >> 0 == +_0x17c123[_0x527c77 + 1] ? [] : {}, _0x3c2c1b)[_0x17c123[_0x17c123["length"] - 1]] = _0x2e3d0, _0x3c2c1b);
    }
    ["getdata"](_0xfba813) {
      let _0x5409dd = this["getval"](_0xfba813);
      if (/^@/["test"](_0xfba813)) {
        const [, _0xf26110, _0x3d58b4] = /^@(.*?)\.(.*?)$/["exec"](_0xfba813),
          _0x52a5f7 = _0xf26110 ? this["getval"](_0xf26110) : "";
        if (_0x52a5f7) {
          try {
            const _0x45bba4 = JSON["parse"](_0x52a5f7);
            _0x5409dd = _0x45bba4 ? this["lodash_get"](_0x45bba4, _0x3d58b4, "") : _0x5409dd;
          } catch (_0xe00ecd) {
            _0x5409dd = "";
          }
        }
      }
      return _0x5409dd;
    }
    ["setdata"](_0x50cd17, _0x51529f) {
      let _0x12893a = !1;
      if (/^@/["test"](_0x51529f)) {
        const [, _0x1af6a1, _0x25ee61] = /^@(.*?)\.(.*?)$/["exec"](_0x51529f),
          _0x13f548 = this["getval"](_0x1af6a1),
          _0x474fa6 = _0x1af6a1 ? "null" === _0x13f548 ? null : _0x13f548 || "{}" : "{}";
        try {
          const _0xbeaea0 = JSON["parse"](_0x474fa6);
          this["lodash_set"](_0xbeaea0, _0x25ee61, _0x50cd17);
          _0x12893a = this["setval"](JSON["stringify"](_0xbeaea0), _0x1af6a1);
        } catch (_0x49c8da) {
          const _0x4e4746 = {};
          this["lodash_set"](_0x4e4746, _0x25ee61, _0x50cd17);
          _0x12893a = this["setval"](JSON["stringify"](_0x4e4746), _0x1af6a1);
        }
      } else {
        _0x12893a = this["setval"](_0x50cd17, _0x51529f);
      }
      return _0x12893a;
    }
    ["getval"](_0x184142) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["read"](_0x184142) : this["isQuanX"]() ? $prefs["valueForKey"](_0x184142) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x184142]) : this["data"] && this["data"][_0x184142] || null;
    }
    ["setval"](_0x4357c3, _0x1c2ab6) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["write"](_0x4357c3, _0x1c2ab6) : this["isQuanX"]() ? $prefs["setValueForKey"](_0x4357c3, _0x1c2ab6) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x1c2ab6] = _0x4357c3, this["writedata"](), !0) : this["data"] && this["data"][_0x1c2ab6] || null;
    }
    ["initGotEnv"](_0xba2568) {
      this["got"] = this["got"] ? this["got"] : require("got");
      this["cktough"] = this["cktough"] ? this["cktough"] : require("tough-cookie");
      this["ckjar"] = this["ckjar"] ? this["ckjar"] : new this["cktough"]["CookieJar"]();
      _0xba2568 && (_0xba2568["headers"] = _0xba2568["headers"] ? _0xba2568["headers"] : {}, void 0 === _0xba2568["headers"]["Cookie"] && void 0 === _0xba2568["cookieJar"] && (_0xba2568["cookieJar"] = this["ckjar"]));
    }
    ["get"](_0x3ca18a, _0x1ea7e5 = () => {}) {
      _0x3ca18a["headers"] && (delete _0x3ca18a["headers"]["Content-Type"], delete _0x3ca18a["headers"]["Content-Length"]);
      this["isSurge"]() || this["isLoon"]() ? (this["isSurge"]() && this["isNeedRewrite"] && (_0x3ca18a["headers"] = _0x3ca18a["headers"] || {}, Object["assign"](_0x3ca18a["headers"], {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient["get"](_0x3ca18a, (_0x524b69, _0x582244, _0x3703cc) => {
        !_0x524b69 && _0x582244 && (_0x582244["body"] = _0x3703cc, _0x582244["statusCode"] = _0x582244["status"]);
        _0x1ea7e5(_0x524b69, _0x582244, _0x3703cc);
      })) : this["isQuanX"]() ? (this["isNeedRewrite"] && (_0x3ca18a["opts"] = _0x3ca18a["opts"] || {}, Object["assign"](_0x3ca18a["opts"], {
        "hints": !1
      })), $task["fetch"](_0x3ca18a)["then"](_0x26b1e0 => {
        const {
          statusCode: _0x458b26,
          statusCode: _0x54367d,
          headers: _0x4ab0b1,
          body: _0x369361
        } = _0x26b1e0;
        _0x1ea7e5(null, {
          "status": _0x458b26,
          "statusCode": _0x54367d,
          "headers": _0x4ab0b1,
          "body": _0x369361
        }, _0x369361);
      }, _0x5a9b06 => _0x1ea7e5(_0x5a9b06))) : this["isNode"]() && (this["initGotEnv"](_0x3ca18a), this["got"](_0x3ca18a)["on"]("redirect", (_0x500810, _0x5f1904) => {
        try {
          if (_0x500810["headers"]["set-cookie"]) {
            const _0x4840db = _0x500810["headers"]["set-cookie"]["map"](this["cktough"]["Cookie"]["parse"])["toString"]();
            _0x4840db && this["ckjar"]["setCookieSync"](_0x4840db, null);
            _0x5f1904["cookieJar"] = this["ckjar"];
          }
        } catch (_0x5f7106) {
          this["logErr"](_0x5f7106);
        }
      })["then"](_0x3c7200 => {
        const {
          statusCode: _0x597934,
          statusCode: _0x4a3324,
          headers: _0x4b06f1,
          body: _0x12f998
        } = _0x3c7200;
        _0x1ea7e5(null, {
          "status": _0x597934,
          "statusCode": _0x4a3324,
          "headers": _0x4b06f1,
          "body": _0x12f998
        }, _0x12f998);
      }, _0xdc2bb7 => {
        const {
          message: _0x4f88e5,
          response: _0x3aa3d6
        } = _0xdc2bb7;
        _0x1ea7e5(_0x4f88e5, _0x3aa3d6, _0x3aa3d6 && _0x3aa3d6["body"]);
      }));
    }
    ["post"](_0x55daf7, _0x5b57f0 = () => {}) {
      if (_0x55daf7["body"] && _0x55daf7["headers"] && !_0x55daf7["headers"]["Content-Type"] && (_0x55daf7["headers"]["Content-Type"] = "application/x-www-form-urlencoded"), _0x55daf7["headers"] && delete _0x55daf7["headers"]["Content-Length"], this["isSurge"]() || this["isLoon"]()) {
        this["isSurge"]() && this["isNeedRewrite"] && (_0x55daf7["headers"] = _0x55daf7["headers"] || {}, Object["assign"](_0x55daf7["headers"], {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient["post"](_0x55daf7, (_0x200c87, _0x538b70, _0x3e4601) => {
          !_0x200c87 && _0x538b70 && (_0x538b70["body"] = _0x3e4601, _0x538b70["statusCode"] = _0x538b70["status"]);
          _0x5b57f0(_0x200c87, _0x538b70, _0x3e4601);
        });
      } else {
        if (this["isQuanX"]()) {
          _0x55daf7["method"] = "POST";
          this["isNeedRewrite"] && (_0x55daf7["opts"] = _0x55daf7["opts"] || {}, Object["assign"](_0x55daf7["opts"], {
            "hints": !1
          }));
          $task["fetch"](_0x55daf7)["then"](_0x1c3cb5 => {
            const {
              statusCode: _0x182b29,
              statusCode: _0x2576a4,
              headers: _0x3e9734,
              body: _0x2d582b
            } = _0x1c3cb5;
            _0x5b57f0(null, {
              "status": _0x182b29,
              "statusCode": _0x2576a4,
              "headers": _0x3e9734,
              "body": _0x2d582b
            }, _0x2d582b);
          }, _0x2d4afe => _0x5b57f0(_0x2d4afe));
        } else {
          if (this["isNode"]()) {
            this["initGotEnv"](_0x55daf7);
            const {
              url: _0x37d27d,
              ..._0x3968c5
            } = _0x55daf7;
            this["got"]["post"](_0x37d27d, _0x3968c5)["then"](_0x5ea6a6 => {
              const {
                statusCode: _0x521536,
                statusCode: _0x66071e,
                headers: _0x431742,
                body: _0x50e5b7
              } = _0x5ea6a6;
              _0x5b57f0(null, {
                "status": _0x521536,
                "statusCode": _0x66071e,
                "headers": _0x431742,
                "body": _0x50e5b7
              }, _0x50e5b7);
            }, _0x30298d => {
              const {
                message: _0x73ee03,
                response: _0x653ea5
              } = _0x30298d;
              _0x5b57f0(_0x73ee03, _0x653ea5, _0x653ea5 && _0x653ea5["body"]);
            });
          }
        }
      }
    }
    ["time"](_0x5359a7, _0x215bef = null) {
      const _0x585c3d = _0x215bef ? new Date(_0x215bef) : new Date();
      let _0x4d9e79 = {
        "M+": _0x585c3d["getMonth"]() + 1,
        "d+": _0x585c3d["getDate"](),
        "H+": _0x585c3d["getHours"](),
        "m+": _0x585c3d["getMinutes"](),
        "s+": _0x585c3d["getSeconds"](),
        "q+": Math["floor"]((_0x585c3d["getMonth"]() + 3) / 3),
        "S": _0x585c3d["getMilliseconds"]()
      };
      /(y+)/["test"](_0x5359a7) && (_0x5359a7 = _0x5359a7["replace"](RegExp["$1"], (_0x585c3d["getFullYear"]() + "")["substr"](4 - RegExp["$1"]["length"])));
      for (let _0x1828b5 in _0x4d9e79) new RegExp("(" + _0x1828b5 + ")")["test"](_0x5359a7) && (_0x5359a7 = _0x5359a7["replace"](RegExp["$1"], 1 == RegExp["$1"]["length"] ? _0x4d9e79[_0x1828b5] : ("00" + _0x4d9e79[_0x1828b5])["substr"](("" + _0x4d9e79[_0x1828b5])["length"])));
      return _0x5359a7;
    }
    ["msg"](_0x140322 = _0x3b9ec0, _0x287e79 = "", _0x5b80a5 = "", _0x445cf) {
      const _0x37df8d = _0xf09f96 => {
        if (!_0xf09f96) {
          return _0xf09f96;
        }
        if ("string" == typeof _0xf09f96) {
          return this["isLoon"]() ? _0xf09f96 : this["isQuanX"]() ? {
            "open-url": _0xf09f96
          } : this["isSurge"]() ? {
            "url": _0xf09f96
          } : void 0;
        }
        if ("object" == typeof _0xf09f96) {
          if (this["isLoon"]()) {
            let _0x5af932 = _0xf09f96["openUrl"] || _0xf09f96["url"] || _0xf09f96["open-url"],
              _0x50489e = _0xf09f96["mediaUrl"] || _0xf09f96["media-url"];
            return {
              "openUrl": _0x5af932,
              "mediaUrl": _0x50489e
            };
          }
          if (this["isQuanX"]()) {
            let _0x2fb4d1 = _0xf09f96["open-url"] || _0xf09f96["url"] || _0xf09f96["openUrl"],
              _0x4443de = _0xf09f96["media-url"] || _0xf09f96["mediaUrl"];
            return {
              "open-url": _0x2fb4d1,
              "media-url": _0x4443de
            };
          }
          if (this["isSurge"]()) {
            let _0x1d751e = _0xf09f96["url"] || _0xf09f96["openUrl"] || _0xf09f96["open-url"];
            return {
              "url": _0x1d751e
            };
          }
        }
      };
      if (this["isMute"] || (this["isSurge"]() || this["isLoon"]() ? $notification["post"](_0x140322, _0x287e79, _0x5b80a5, _0x37df8d(_0x445cf)) : this["isQuanX"]() && $notify(_0x140322, _0x287e79, _0x5b80a5, _0x37df8d(_0x445cf))), !this["isMuteLog"]) {
        let _0x15606e = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        _0x15606e["push"](_0x140322);
        _0x287e79 && _0x15606e["push"](_0x287e79);
        _0x5b80a5 && _0x15606e["push"](_0x5b80a5);
        console["log"](_0x15606e["join"]("\n"));
        this["logs"] = this["logs"]["concat"](_0x15606e);
      }
    }
    ["log"](..._0x5e7b9e) {
      _0x5e7b9e["length"] > 0 && (this["logs"] = [...this["logs"], ..._0x5e7b9e]);
      console["log"](_0x5e7b9e["join"](this["logSeparator"]));
    }
    ["logErr"](_0x8642f6, _0x11c471) {
      const _0xa54a7d = !this["isSurge"]() && !this["isQuanX"]() && !this["isLoon"]();
      _0xa54a7d ? this["log"]("", "\u2757\uFE0F" + this["name"] + ", \u9519\u8BEF!", _0x8642f6["stack"]) : this["log"]("", "\u2757\uFE0F" + this["name"] + ", \u9519\u8BEF!", _0x8642f6);
    }
    ["wait"](_0x28a131) {
      return new Promise(_0x5cf915 => setTimeout(_0x5cf915, _0x28a131));
    }
    ["done"](_0x40d19d = {}) {
      const _0x4de31b = new Date()["getTime"](),
        _0x18dbc2 = (_0x4de31b - this["startTime"]) / 1000;
      this["log"]("", "\uD83D\uDD14" + this["name"] + ", \u7ED3\u675F! \uD83D\uDD5B " + _0x18dbc2 + " \u79D2");
      this["log"]();
      (this["isSurge"]() || this["isQuanX"]() || this["isLoon"]()) && $done(_0x40d19d);
    }
  }(_0x3b9ec0, _0x557c50);
}