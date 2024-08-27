//Tue Aug 27 2024 02:58:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
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
  } = require("./common.js"),
  {
    sendNotify
  } = require("./ele_sendNotify.js"),
  _0x3ee842 = require("moment"),
  _0x43a291 = require("request");
const _0xf58a19 = 10,
  _0x55733f = "异常";
let _0x31839a = getCookies();
const _0x46e8ae = process.env.ELE_CARME;
var _0x2c5f85 = "| 昵称          | 乐园币    | 总吃货豆 |余额 |\n| ------------- | ------------------ | ---------|---------|\n";
function _0x15e7a0() {
  return _0x3ee842().format("YYYY-MM-DD");
}
function _0x23f651() {
  var _0x1ee5cb = new Date(),
    _0x2cdcaf = _0x1ee5cb.getMonth() + 1,
    _0x2fb6e1 = _0x1ee5cb.getDate();
  _0x2cdcaf <= 9 && (_0x2cdcaf = "0" + _0x2cdcaf);
  _0x2fb6e1 <= 9 && (_0x2fb6e1 = "0" + _0x2fb6e1);
  return _0x1ee5cb.getFullYear() + "-" + _0x2cdcaf + "-" + _0x2fb6e1;
}
function _0x1fb425(_0xb37175) {
  const _0x9015a9 = {
    url: "https://httpizza.ele.me/walletUserV2/storedcard/queryBalanceBycardType?cardType=platform",
    headers: {}
  };
  _0x9015a9.headers.Cookie = _0xb37175;
  _0x9015a9.headers["User-Agent"] = User_Agent;
  _0x9015a9.headers.referer = "https://r.ele.me/alsc-wallet/home.html?channel=grzx";
  return tryCatchPromise(_0x2ed42a => {
    _0x43a291(_0x9015a9, async (_0x23258b, _0x304f34, _0x143480) => {
      if (!_0x23258b && _0x304f34.statusCode == 200) {
        try {
          const _0x5b4368 = JSON.parse(_0x143480),
            _0x8bafa4 = _0x5b4368.data.totalAmount;
          _0x2ed42a(_0x8bafa4);
        } catch (_0x1848a9) {
          console.log("Error parsing response:", _0x143480);
          _0x2ed42a(null);
        }
      } else {
        console.log("Request failed:", _0x23258b);
        _0x2ed42a(null);
      }
    });
  });
}
function _0xe7326c(_0xc9a1ec) {
  const _0x50f494 = {
    Cookie: _0xc9a1ec,
    "User-Agent": User_Agent
  };
  const _0x3393f4 = {
    url: "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?latitude=30.153352&limit=20&longitude=104.153352&offset=0",
    headers: _0x50f494
  };
  return tryCatchPromise(_0x396f71 => {
    _0x43a291(_0x3393f4, async (_0x10646f, _0x38ea7e, _0x12e331) => {
      if (!_0x10646f && _0x38ea7e.statusCode == 200) {
        const _0xc3f628 = JSON.parse(_0x12e331);
        try {
          _0x396f71(_0xc3f628.peaCount);
        } catch (_0x1bfe58) {
          console.log(_0x12e331);
          _0x396f71(null);
        }
      } else {
        _0x396f71(null);
      }
    });
  });
}
async function _0xc1502e(_0x5c7276) {
  const _0x3bc7f2 = {
    "content-type": "application/json",
    Cookie: _0x5c7276,
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36"
  };
  s = _0x3bc7f2;
  r = "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?offset=0&limit=100&longitude=39.916527&latitude=116.397128";
  const _0x5e2b0b = {
    url: r,
    headers: s
  };
  return tryCatchPromise(_0x17fdcf => {
    _0x43a291(_0x5e2b0b, async (_0xc709fe, _0x4e0246, _0x424ff3) => {
      if (!_0xc709fe && _0x4e0246.statusCode == 200) {
        const _0x263804 = JSON.parse(_0x424ff3);
        try {
          for (var _0xc0ebae = _0x23f651(), _0x39f9d3 = _0x263804.records, _0x2377bf = 0, _0x5d2d19 = 0; _0x5d2d19 < _0x39f9d3.length; _0x5d2d19++) {
            _0x39f9d3[_0x5d2d19].createdTime.indexOf(_0xc0ebae) > -1 && 1 == _0x39f9d3[_0x5d2d19].optType && (_0x2377bf += _0x39f9d3[_0x5d2d19].count);
          }
          _0x17fdcf(_0x2377bf);
        } catch (_0x2d48f4) {
          console.log(_0x424ff3);
          _0x17fdcf(null);
        }
      } else {
        _0x17fdcf(null);
      }
    });
  });
}
async function _0x2e425a(_0x585d41) {}
async function _0x1df2c9(_0x13c470, _0x13b90e) {
  const _0x36f6db = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x13c470,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x2b6060 = new Date().getTime(),
    _0x5062c4 = 12574478;
  var _0xb35148 = "data=" + encodeURIComponent(JSON.stringify(_0x13b90e));
  const _0x1f3c2e = getToken(_0x13c470),
    _0x4ac9cf = _0x1f3c2e.split("_")[0],
    _0x234c20 = await sign(_0x4ac9cf + "&" + _0x2b6060 + "&" + _0x5062c4 + "&" + JSON.stringify(_0x13b90e), _0x46e8ae);
  const _0x366834 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x2b6060 + "&sign=" + _0x234c20 + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0x36f6db,
    body: _0xb35148
  };
  return tryCatchPromise(_0x518e86 => {
    _0x43a291(_0x366834, async (_0x13db70, _0x5a6396, _0x1a04a4) => {
      if (!_0x13db70 && _0x5a6396.statusCode == 200) {
        try {
          const _0x53edab = JSON.parse(_0x1a04a4),
            _0x3b1563 = JSON.parse(_0x53edab.data.data);
          _0x518e86(_0x3b1563);
        } catch (_0x355bb3) {
          console.log(_0x1a04a4);
          _0x518e86(null);
        }
      } else {
        _0x518e86(null);
      }
    });
  });
}
async function _0xf7ccac(_0x5ed044, _0x52f401) {
  const _0x42eee4 = {
    authority: "mtop.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x5ed044,
    origin: "https://tb.ele.me",
    pragma: "no-cache",
    referer: "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x4eb5c3 = {
    templateId: "1404",
    bizScene: "game_center",
    convertType: "GAME_CENTER",
    startTime: _0x15e7a0() + " 00:00:00",
    pageNo: _0x52f401,
    pageSize: "20"
  };
  const _0x178712 = new Date().getTime(),
    _0x110d99 = 12574478;
  var _0x30d75d = "data=" + encodeURIComponent(JSON.stringify(_0x4eb5c3));
  const _0x4771ac = getToken(_0x5ed044),
    _0x1b3180 = _0x4771ac.split("_")[0];
  const _0xf3acf5 = await sign(_0x1b3180 + "&" + _0x178712 + "&" + _0x110d99 + "&" + JSON.stringify(_0x4eb5c3), _0x46e8ae),
    _0x50548d = {
      url: "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.querypropertydetail/1.0/?jsv=2.7.1&appKey=12574478&t=" + _0x178712 + "&sign=" + _0xf3acf5 + "&api=mtop.koubei.interaction.center.common.querypropertydetail&v=1.0",
      method: "POST",
      headers: _0x42eee4,
      body: _0x30d75d
    };
  return tryCatchPromise(_0x52b682 => {
    _0x43a291(_0x50548d, async (_0x3bc4c1, _0x46c887, _0x10e9d6) => {
      if (!_0x3bc4c1 && _0x46c887.statusCode === 200) {
        const _0x535c06 = JSON.parse(_0x10e9d6);
        try {
          if (_0x535c06.data) {
            var _0x4acbc2 = 0;
            for (let _0x48720c = 0; _0x48720c < _0x535c06.data.list.length; _0x48720c++) {
              const _0x4c30be = _0x535c06.data.list[_0x48720c];
              if (_0x4c30be.detailType === "GRANT" && _0x4c30be.gmtModified.indexOf(_0x15e7a0()) !== -1) {
                _0x4acbc2 += Number(_0x4c30be.amount);
              }
            }
          }
          _0x52b682(_0x4acbc2);
        } catch (_0x11e620) {
          console.log(_0x10e9d6);
        }
        _0x52b682(_0x535c06);
      } else {
        _0x52b682(null);
      }
    });
  });
}
async function lybamount(_0x55c022) {
  const _0x3c49fc = {
    authority: "mtop.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x55c022,
    origin: "https://tb.ele.me",
    pragma: "no-cache",
    referer: "https://tb.ele.me/wow/alsc/mod/3fe8408d9ba38d4726448a87?geohash=wssuj22rzrwn&spm-pre=a2ogi.13684611.0.0&spm=a13.b_activity_kb_m71293.0.0",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x245966 = {
    templateIds: "[\"1404\"]"
  };
  const _0x5e323b = new Date().getTime(),
    _0x1d2df1 = 12574478;
  var _0x5c28e2 = "data=" + encodeURIComponent(JSON.stringify(_0x245966));
  const _0x31b2be = getToken(_0x55c022),
    _0x4f6b87 = _0x31b2be.split("_")[0],
    _0x1f0be0 = await sign(_0x4f6b87 + "&" + _0x5e323b + "&" + _0x1d2df1 + "&" + JSON.stringify(_0x245966), _0x46e8ae),
    _0x4a4d0c = {
      url: "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.queryintegralproperty.v2/1.0/5.0/?jsv=2.7.2&appKey=12574478&t=" + _0x5e323b + "&sign=" + _0x1f0be0 + "&api=mtop.koubei.interaction.center.common.queryintegralproperty.v2&v=1.0",
      method: "POST",
      headers: _0x3c49fc,
      body: _0x5c28e2
    };
  return tryCatchPromise(_0xd18811 => {
    _0x43a291(_0x4a4d0c, async (_0x5b8efa, _0x3134b9, _0x2f7a21) => {
      if (!_0x5b8efa && _0x3134b9.statusCode === 200) {
        try {
          const _0x41729b = JSON.parse(_0x2f7a21);
          if (_0x41729b.data && _0x41729b.data.data) {
            const _0x7d846c = _0x41729b.data.data["1404"]?.["count"] || 0;
            _0xd18811(_0x7d846c);
          } else {
            _0xd18811(0);
          }
        } catch (_0x4b2344) {
          console.log("Error parsing response:", _0x2f7a21);
          _0xd18811(0);
        }
      } else {
        _0xd18811(0);
      }
    });
  });
}
async function _0x378f6c(_0x39be1f, _0x3a78fd) {
  const _0x35d44f = getCookieMap(_0x39be1f);
  if (!_0x35d44f.has("wxUid")) {
    console.log("没有获取到推送 uid，不推送消息\n");
  } else {
    await sendNotify("饿了么资产推送", _0x3a78fd, {
      uid: _0x35d44f.get("wxUid")
    });
  }
}
async function _0x163ae7() {
  await validateCarmeWithType(_0x46e8ae, 1);
  for (let _0x1517f4 = 0; _0x1517f4 < _0x31839a.length; _0x1517f4++) {
    let _0x4039b7 = _0x31839a[_0x1517f4];
    _0x4039b7 = await checkCk(_0x4039b7);
    if (!_0x4039b7) {
      continue;
    }
    let _0x2cc230 = await getUserInfo(_0x4039b7);
    if (!_0x2cc230.username) {
      console.log("第", _0x1517f4 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    const _0x4cf2b9 = _0x2cc230.user_id;
    await checkCarmeCount(_0x46e8ae, _0x4cf2b9, _0xf58a19);
    console.log("******开始【饿了么账号", _0x1517f4 + 1, "】", _0x2cc230.username, "手机号:", _0x2cc230.mobile, "*********");
    let _0x4d3b58 = await _0x1fb425(_0x4039b7);
    if (_0x4d3b58 == null) {
      _0x4d3b58 = _0x55733f;
    } else {
      _0x4d3b58 = _0x4d3b58 / 100;
    }
    let _0x1ae55a = await _0xe7326c(_0x4039b7);
    if (!_0x1ae55a) {
      _0x1ae55a = _0x55733f;
    }
    let _0x465183 = await _0xf7ccac(_0x4039b7, 1);
    await wait(1);
    let _0x571941 = await _0xf7ccac(_0x4039b7, 2);
    await wait(1);
    let _0x533afe = await _0xf7ccac(_0x4039b7, 3);
    await wait(1);
    let _0x4bd845 = await _0xf7ccac(_0x4039b7, 4);
    await wait(1);
    let _0x51eb24 = await _0xf7ccac(_0x4039b7, 5),
      _0x11982d = _0x465183 + _0x571941 + _0x533afe + _0x4bd845 + _0x51eb24;
    if (!_0x11982d) {
      _0x11982d = _0x55733f;
    }
    var _0x4e69a1 = await lybamount(_0x4039b7);
    if (!_0x4e69a1) {
      _0x4e69a1 = _0x55733f;
    }
    console.log("今日共获得乐园币：" + _0x11982d);
    console.log("账户总乐园币：" + _0x4e69a1);
    console.log("总吃货豆：" + _0x1ae55a);
    console.log("余额：" + _0x4d3b58);
    var _0x5cc1e5 = "###资产推送\n" + _0x2c5f85 + "|" + _0x2cc230.username + "|" + _0x11982d + "/" + _0x4e69a1 + "|" + _0x1ae55a + "|" + _0x4d3b58 + "|";
    await _0x378f6c(_0x4039b7, _0x5cc1e5);
    await wait(10);
  }
  process.exit(0);
}
_0x163ae7();
function Env(_0x4384f6, _0x1f2059) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x5d6626 {
    constructor(_0x524ca1) {
      this.env = _0x524ca1;
    }
    send(_0x1eb458, _0x2b0756 = "GET") {
      _0x1eb458 = "string" == typeof _0x1eb458 ? {
        url: _0x1eb458
      } : _0x1eb458;
      let _0x36e9b8 = this.get;
      "POST" === _0x2b0756 && (_0x36e9b8 = this.post);
      return new Promise((_0x5a493d, _0x50ee75) => {
        _0x36e9b8.call(this, _0x1eb458, (_0x245355, _0x469730, _0x267071) => {
          _0x245355 ? _0x50ee75(_0x245355) : _0x5a493d(_0x469730);
        });
      });
    }
    get(_0x310e5e) {
      return this.send.call(this.env, _0x310e5e);
    }
    post(_0x1c75af) {
      return this.send.call(this.env, _0x1c75af, "POST");
    }
  }
  return new class {
    constructor(_0x3b71b0, _0x14a0cb) {
      this.name = _0x3b71b0;
      this.http = new _0x5d6626(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x14a0cb);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x430539, _0x5f1b87 = null) {
      try {
        return JSON.parse(_0x430539);
      } catch {
        return _0x5f1b87;
      }
    }
    toStr(_0x581f61, _0x38f841 = null) {
      try {
        return JSON.stringify(_0x581f61);
      } catch {
        return _0x38f841;
      }
    }
    getjson(_0xae8c3a, _0x39abcc) {
      let _0x2f99e8 = _0x39abcc;
      const _0x553f6c = this.getdata(_0xae8c3a);
      if (_0x553f6c) {
        try {
          _0x2f99e8 = JSON.parse(this.getdata(_0xae8c3a));
        } catch {}
      }
      return _0x2f99e8;
    }
    setjson(_0x2fb6da, _0x2997c9) {
      try {
        return this.setdata(JSON.stringify(_0x2fb6da), _0x2997c9);
      } catch {
        return !1;
      }
    }
    getScript(_0xeb01d) {
      return new Promise(_0x1a15e6 => {
        const _0xfe9092 = {
          url: _0xeb01d
        };
        this.get(_0xfe9092, (_0x2960af, _0x18bf2e, _0x2c8528) => _0x1a15e6(_0x2c8528));
      });
    }
    runScript(_0x4277d6, _0x3b2515) {
      return new Promise(_0xc5f4a4 => {
        let _0x2286a5 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x2286a5 = _0x2286a5 ? _0x2286a5.replace(/\n/g, "").trim() : _0x2286a5;
        let _0x21390a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x21390a = _0x21390a ? 1 * _0x21390a : 20;
        _0x21390a = _0x3b2515 && _0x3b2515.timeout ? _0x3b2515.timeout : _0x21390a;
        const _0x16b64a = {
          script_text: _0x4277d6,
          mock_type: "cron",
          timeout: _0x21390a
        };
        const [_0x6f9721, _0x12f281] = _0x2286a5.split("@"),
          _0xa144e3 = {
            url: "http://" + _0x12f281 + "/v1/scripting/evaluate",
            body: _0x16b64a,
            headers: {
              "X-Key": _0x6f9721,
              Accept: "*/*"
            }
          };
        this.post(_0xa144e3, (_0x154947, _0xfc01ec, _0x540647) => _0xc5f4a4(_0x540647));
      }).catch(_0x3d8ae3 => this.logErr(_0x3d8ae3));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x2b2bad = this.path.resolve(this.dataFile),
          _0x36e252 = this.path.resolve(process.cwd(), this.dataFile),
          _0x143dae = this.fs.existsSync(_0x2b2bad),
          _0x2f657a = !_0x143dae && this.fs.existsSync(_0x36e252);
        if (!_0x143dae && !_0x2f657a) {
          return {};
        }
        {
          const _0x2ed745 = _0x143dae ? _0x2b2bad : _0x36e252;
          try {
            return JSON.parse(this.fs.readFileSync(_0x2ed745));
          } catch (_0x87c15d) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xa14a5a = this.path.resolve(this.dataFile),
          _0x26eddf = this.path.resolve(process.cwd(), this.dataFile),
          _0x3ef71a = this.fs.existsSync(_0xa14a5a),
          _0x5b81a8 = !_0x3ef71a && this.fs.existsSync(_0x26eddf),
          _0x376020 = JSON.stringify(this.data);
        _0x3ef71a ? this.fs.writeFileSync(_0xa14a5a, _0x376020) : _0x5b81a8 ? this.fs.writeFileSync(_0x26eddf, _0x376020) : this.fs.writeFileSync(_0xa14a5a, _0x376020);
      }
    }
    lodash_get(_0x3098ba, _0x56fb48, _0x15533e) {
      const _0x837e61 = _0x56fb48.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x53a09e = _0x3098ba;
      for (const _0x139329 of _0x837e61) if (_0x53a09e = Object(_0x53a09e)[_0x139329], void 0 === _0x53a09e) {
        return _0x15533e;
      }
      return _0x53a09e;
    }
    lodash_set(_0x2bab7e, _0x23841c, _0x2198ea) {
      return Object(_0x2bab7e) !== _0x2bab7e ? _0x2bab7e : (Array.isArray(_0x23841c) || (_0x23841c = _0x23841c.toString().match(/[^.[\]]+/g) || []), _0x23841c.slice(0, -1).reduce((_0x3f09d8, _0x3b87ce, _0x1bceb3) => Object(_0x3f09d8[_0x3b87ce]) === _0x3f09d8[_0x3b87ce] ? _0x3f09d8[_0x3b87ce] : _0x3f09d8[_0x3b87ce] = Math.abs(_0x23841c[_0x1bceb3 + 1]) >> 0 == +_0x23841c[_0x1bceb3 + 1] ? [] : {}, _0x2bab7e)[_0x23841c[_0x23841c.length - 1]] = _0x2198ea, _0x2bab7e);
    }
    getdata(_0x3cdc20) {
      let _0x6b5bf0 = this.getval(_0x3cdc20);
      if (/^@/.test(_0x3cdc20)) {
        const [, _0x452d49, _0x1596f9] = /^@(.*?)\.(.*?)$/.exec(_0x3cdc20),
          _0x1aea55 = _0x452d49 ? this.getval(_0x452d49) : "";
        if (_0x1aea55) {
          try {
            const _0x5b19d7 = JSON.parse(_0x1aea55);
            _0x6b5bf0 = _0x5b19d7 ? this.lodash_get(_0x5b19d7, _0x1596f9, "") : _0x6b5bf0;
          } catch (_0x22c0b0) {
            _0x6b5bf0 = "";
          }
        }
      }
      return _0x6b5bf0;
    }
    setdata(_0x2449aa, _0x180a16) {
      let _0x296fdc = !1;
      if (/^@/.test(_0x180a16)) {
        const [, _0x326afd, _0x2c56d0] = /^@(.*?)\.(.*?)$/.exec(_0x180a16),
          _0x54fa6c = this.getval(_0x326afd),
          _0x4419bc = _0x326afd ? "null" === _0x54fa6c ? null : _0x54fa6c || "{}" : "{}";
        try {
          const _0x5b8622 = JSON.parse(_0x4419bc);
          this.lodash_set(_0x5b8622, _0x2c56d0, _0x2449aa);
          _0x296fdc = this.setval(JSON.stringify(_0x5b8622), _0x326afd);
        } catch (_0x3bc669) {
          const _0x515be2 = {};
          this.lodash_set(_0x515be2, _0x2c56d0, _0x2449aa);
          _0x296fdc = this.setval(JSON.stringify(_0x515be2), _0x326afd);
        }
      } else {
        _0x296fdc = this.setval(_0x2449aa, _0x180a16);
      }
      return _0x296fdc;
    }
    getval(_0x4fb485) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4fb485) : this.isQuanX() ? $prefs.valueForKey(_0x4fb485) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4fb485]) : this.data && this.data[_0x4fb485] || null;
    }
    setval(_0x35223b, _0x3a0229) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x35223b, _0x3a0229) : this.isQuanX() ? $prefs.setValueForKey(_0x35223b, _0x3a0229) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3a0229] = _0x35223b, this.writedata(), !0) : this.data && this.data[_0x3a0229] || null;
    }
    initGotEnv(_0x65976e) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x65976e && (_0x65976e.headers = _0x65976e.headers ? _0x65976e.headers : {}, void 0 === _0x65976e.headers.Cookie && void 0 === _0x65976e.cookieJar && (_0x65976e.cookieJar = this.ckjar));
    }
    get(_0xf15a37, _0x128703 = () => {}) {
      _0xf15a37.headers && (delete _0xf15a37.headers["Content-Type"], delete _0xf15a37.headers["Content-Length"]);
      const _0x560ec1 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x3da608 = {
        hints: !1
      };
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0xf15a37.headers = _0xf15a37.headers || {}, Object.assign(_0xf15a37.headers, _0x560ec1)), $httpClient.get(_0xf15a37, (_0x438fe7, _0x2058eb, _0x2781e9) => {
        !_0x438fe7 && _0x2058eb && (_0x2058eb.body = _0x2781e9, _0x2058eb.statusCode = _0x2058eb.status);
        _0x128703(_0x438fe7, _0x2058eb, _0x2781e9);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0xf15a37.opts = _0xf15a37.opts || {}, Object.assign(_0xf15a37.opts, _0x3da608)), $task.fetch(_0xf15a37).then(_0x5797a2 => {
        const {
            statusCode: _0x3f96a3,
            statusCode: _0x2212cb,
            headers: _0x231bf5,
            body: _0x3620cd
          } = _0x5797a2,
          _0x432f55 = {
            status: _0x3f96a3,
            statusCode: _0x2212cb,
            headers: _0x231bf5,
            body: _0x3620cd
          };
        _0x128703(null, _0x432f55, _0x3620cd);
      }, _0x5b6908 => _0x128703(_0x5b6908))) : this.isNode() && (this.initGotEnv(_0xf15a37), this.got(_0xf15a37).on("redirect", (_0x15b910, _0x2277cb) => {
        try {
          if (_0x15b910.headers["set-cookie"]) {
            const _0x2f3873 = _0x15b910.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x2f3873 && this.ckjar.setCookieSync(_0x2f3873, null);
            _0x2277cb.cookieJar = this.ckjar;
          }
        } catch (_0x11723b) {
          this.logErr(_0x11723b);
        }
      }).then(_0x2bfaea => {
        const {
            statusCode: _0x35b6c4,
            statusCode: _0x19b94a,
            headers: _0x17dc00,
            body: _0x1fd83a
          } = _0x2bfaea,
          _0x429229 = {
            status: _0x35b6c4,
            statusCode: _0x19b94a,
            headers: _0x17dc00,
            body: _0x1fd83a
          };
        _0x128703(null, _0x429229, _0x1fd83a);
      }, _0x28cb9e => {
        const {
          message: _0x1e1741,
          response: _0x476511
        } = _0x28cb9e;
        _0x128703(_0x1e1741, _0x476511, _0x476511 && _0x476511.body);
      }));
    }
    post(_0x54028b, _0x5b7513 = () => {}) {
      if (_0x54028b.body && _0x54028b.headers && !_0x54028b.headers["Content-Type"] && (_0x54028b.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x54028b.headers && delete _0x54028b.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        const _0x5c7d16 = {
          "X-Surge-Skip-Scripting": !1
        };
        this.isSurge() && this.isNeedRewrite && (_0x54028b.headers = _0x54028b.headers || {}, Object.assign(_0x54028b.headers, _0x5c7d16));
        $httpClient.post(_0x54028b, (_0x24fa84, _0x231a2b, _0x1d1fd9) => {
          !_0x24fa84 && _0x231a2b && (_0x231a2b.body = _0x1d1fd9, _0x231a2b.statusCode = _0x231a2b.status);
          _0x5b7513(_0x24fa84, _0x231a2b, _0x1d1fd9);
        });
      } else {
        if (this.isQuanX()) {
          _0x54028b.method = "POST";
          const _0x49bf89 = {
            hints: !1
          };
          this.isNeedRewrite && (_0x54028b.opts = _0x54028b.opts || {}, Object.assign(_0x54028b.opts, _0x49bf89));
          $task.fetch(_0x54028b).then(_0x457789 => {
            const {
                statusCode: _0x504597,
                statusCode: _0xba218c,
                headers: _0x95d6dc,
                body: _0x462392
              } = _0x457789,
              _0x5e7a3e = {
                status: _0x504597,
                statusCode: _0xba218c,
                headers: _0x95d6dc,
                body: _0x462392
              };
            _0x5b7513(null, _0x5e7a3e, _0x462392);
          }, _0xc1822d => _0x5b7513(_0xc1822d));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x54028b);
            const {
              url: _0x3ae431,
              ..._0x51dbc1
            } = _0x54028b;
            this.got.post(_0x3ae431, _0x51dbc1).then(_0x56fa40 => {
              const {
                  statusCode: _0xbdd3b,
                  statusCode: _0x5bc502,
                  headers: _0x4f3565,
                  body: _0x303dc0
                } = _0x56fa40,
                _0x50f9fa = {
                  status: _0xbdd3b,
                  statusCode: _0x5bc502,
                  headers: _0x4f3565,
                  body: _0x303dc0
                };
              _0x5b7513(null, _0x50f9fa, _0x303dc0);
            }, _0x443b75 => {
              const {
                message: _0x275bfa,
                response: _0x42bf41
              } = _0x443b75;
              _0x5b7513(_0x275bfa, _0x42bf41, _0x42bf41 && _0x42bf41.body);
            });
          }
        }
      }
    }
    time(_0x380ad9, _0xf8adb1 = null) {
      const _0x3f87a1 = _0xf8adb1 ? new Date(_0xf8adb1) : new Date();
      let _0x503648 = {
        "M+": _0x3f87a1.getMonth() + 1,
        "d+": _0x3f87a1.getDate(),
        "H+": _0x3f87a1.getHours(),
        "m+": _0x3f87a1.getMinutes(),
        "s+": _0x3f87a1.getSeconds(),
        "q+": Math.floor((_0x3f87a1.getMonth() + 3) / 3),
        S: _0x3f87a1.getMilliseconds()
      };
      /(y+)/.test(_0x380ad9) && (_0x380ad9 = _0x380ad9.replace(RegExp.$1, (_0x3f87a1.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x528f51 in _0x503648) new RegExp("(" + _0x528f51 + ")").test(_0x380ad9) && (_0x380ad9 = _0x380ad9.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x503648[_0x528f51] : ("00" + _0x503648[_0x528f51]).substr(("" + _0x503648[_0x528f51]).length)));
      return _0x380ad9;
    }
    msg(_0x43f56d = _0x4384f6, _0x2305cd = "", _0x4a9800 = "", _0x632853) {
      const _0x131b7e = _0xae300d => {
        if (!_0xae300d) {
          return _0xae300d;
        }
        if ("string" == typeof _0xae300d) {
          return this.isLoon() ? _0xae300d : this.isQuanX() ? {
            "open-url": _0xae300d
          } : this.isSurge() ? {
            url: _0xae300d
          } : void 0;
        }
        if ("object" == typeof _0xae300d) {
          if (this.isLoon()) {
            let _0x561d8b = _0xae300d.openUrl || _0xae300d.url || _0xae300d["open-url"],
              _0x331abd = _0xae300d.mediaUrl || _0xae300d["media-url"];
            const _0x288910 = {
              openUrl: _0x561d8b,
              mediaUrl: _0x331abd
            };
            return _0x288910;
          }
          if (this.isQuanX()) {
            let _0x2f610f = _0xae300d["open-url"] || _0xae300d.url || _0xae300d.openUrl,
              _0x4aa59b = _0xae300d["media-url"] || _0xae300d.mediaUrl;
            const _0x53369e = {
              "open-url": _0x2f610f,
              "media-url": _0x4aa59b
            };
            return _0x53369e;
          }
          if (this.isSurge()) {
            let _0x567234 = _0xae300d.url || _0xae300d.openUrl || _0xae300d["open-url"];
            const _0x3ed05d = {
              url: _0x567234
            };
            return _0x3ed05d;
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x43f56d, _0x2305cd, _0x4a9800, _0x131b7e(_0x632853)) : this.isQuanX() && $notify(_0x43f56d, _0x2305cd, _0x4a9800, _0x131b7e(_0x632853))), !this.isMuteLog) {
        let _0xc5f492 = ["", "==============📣系统通知📣=============="];
        _0xc5f492.push(_0x43f56d);
        _0x2305cd && _0xc5f492.push(_0x2305cd);
        _0x4a9800 && _0xc5f492.push(_0x4a9800);
        console.log(_0xc5f492.join("\n"));
        this.logs = this.logs.concat(_0xc5f492);
      }
    }
    log(..._0x458f46) {
      _0x458f46.length > 0 && (this.logs = [...this.logs, ..._0x458f46]);
      console.log(_0x458f46.join(this.logSeparator));
    }
    logErr(_0x55c163, _0x1313f1) {
      const _0xfc8a27 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0xfc8a27 ? this.log("", "❗️" + this.name + ", 错误!", _0x55c163.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x55c163);
    }
    wait(_0x5deaa6) {
      return new Promise(_0x344518 => setTimeout(_0x344518, _0x5deaa6));
    }
    done(_0x146d10 = {}) {
      const _0x24c0ad = new Date().getTime(),
        _0x36252e = (_0x24c0ad - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x36252e + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x146d10);
    }
  }(_0x4384f6, _0x1f2059);
}