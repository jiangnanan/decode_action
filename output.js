//Sun Aug 25 2024 07:09:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getToken,
  checkCk,
  validateCarmeWithType,
  User_Agent,
  checkCarmeCount,
  getUserInfo,
  tryCatchPromise,
  sign,
  couponNotify
} = require("./common.js");
const request = require("request");
const moment = require("moment");
const md5 = require("md5");
const GAME_TYEP = 11;
const kami = process.env.ELE_CARME;
const threadCount = process.env.threadCount || 1;
function getCookies() {
  let _0x5e80e6 = [];
  if (process.env.elmqqck) {
    if (process.env.elmqqck.indexOf("&") > -1) {
      _0x5e80e6 = process.env.elmqqck.split("&");
    } else {
      if (process.env.elmqqck.indexOf("\n") > -1) {
        _0x5e80e6 = process.env.elmqqck.split("\n");
      } else {
        _0x5e80e6 = [process.env.elmqqck];
      }
    }
  }
  return _0x5e80e6;
}
function getNextDayZeroTimestamp(_0x5dc428) {
  let _0xc4a369 = moment(_0x5dc428);
  _0xc4a369 = _0xc4a369.add(1, "days").startOf("day");
  return _0xc4a369.valueOf();
}
async function queryintegralproperty(_0x418aec) {
  const _0x160718 = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"ggetGold\"}",
    bizMethod: "queryIndex"
  };
  const _0x49abc1 = await gameRequest(_0x418aec, _0x160718);
  if (_0x49abc1) {
    return _0x49abc1.num;
  } else {
    return -1;
  }
}
async function gameRequest(_0xbbd89c, _0x5c552d) {
  const _0x58e190 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0xbbd89c,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x2cfa78 = new Date().getTime();
  const _0x53d79a = 12574478;
  var _0x1c1521 = "data=" + encodeURIComponent(JSON.stringify(_0x5c552d));
  const _0x32d0ca = getToken(_0xbbd89c),
    _0x113135 = _0x32d0ca.split("_")[0];
  const _0x2dc4a9 = await sign(_0x113135 + "&" + _0x2cfa78 + "&" + _0x53d79a + "&" + JSON.stringify(_0x5c552d), kami);
  const _0x2df1a4 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x2cfa78 + "&sign=" + _0x2dc4a9 + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0x58e190,
    body: _0x1c1521
  };
  return tryCatchPromise(_0x4f5f81 => {
    request(_0x2df1a4, async (_0x12e64e, _0x5f0534, _0x4a60b6) => {
      if (!_0x12e64e && _0x5f0534.statusCode == 200) {
        try {
          const _0x481f14 = JSON.parse(_0x4a60b6);
          const _0x5418fb = JSON.parse(_0x481f14.data.data);
          _0x4f5f81(_0x5418fb);
        } catch (_0x5234b1) {
          console.log(_0x4a60b6);
          _0x4f5f81(null);
        }
      } else {
        _0x4f5f81(null);
      }
    });
  });
}
async function queryLotteryChance(_0x5ac705) {
  const _0x4c0b37 = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x5ac705,
    "User-Agent": User_Agent
  };
  const _0x4e6c81 = new Date().getTime();
  const _0x1c747d = 12574478;
  const _0x232af1 = {
    actId: "20221207144029906162546384",
    collectionId: "20221216181231449964003945",
    copyId: "20230621180222426368753918",
    bizScene: "game_center",
    channel: "abcd",
    asac: "2A22C0239QW1FOL3UUQY7U"
  };
  const _0x23b95f = "data=" + encodeURIComponent(JSON.stringify(_0x232af1));
  const _0x2fd785 = getToken(_0x5ac705),
    _0x5b3d79 = _0x2fd785.split("_")[0];
  const _0xeddc4e = md5(_0x5b3d79 + "&" + _0x4e6c81 + "&" + _0x1c747d + "&" + JSON.stringify(_0x232af1));
  const _0x24fe68 = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.koubei.interactioncenter.platform.right.exchange.v2/1.0/5.0/?jsv=2.7.1&SV=5.0&appKey=12574478&ttid=1601274958480%40eleme_android_10.14.3&t=" + _0x4e6c81 + "&sign=" + _0xeddc4e + "&api=mtop.koubei.interactioncenter.platform.right.exchange.v2",
    method: "POST",
    headers: _0x4c0b37,
    body: _0x23b95f
  };
  const _0x53aeb3 = {
    length: threadCount
  };
  const _0xf2da58 = Array.from(_0x53aeb3, () => {
    return tryCatchPromise(_0x2ea773 => {
      request(_0x24fe68, async (_0x183b87, _0x1856a4, _0x342f00) => {
        if (!_0x183b87 && _0x1856a4.statusCode === 200) {
          try {
            const _0x590e36 = JSON.parse(_0x342f00);
            if (_0x590e36.data.data) {
              console.log("抢券成功", _0x590e36.data.data[0].rightName);
              await couponNotify(_0x5ac705, "###抢券成功推送\n抢券成功", _0x590e36.data.data[0].rightName);
              process.exit(0);
            } else {
              _0x2ea773();
            }
          } catch (_0x478de7) {
            console.log(_0x478de7);
            _0x2ea773(null);
          }
        } else {
          _0x2ea773(null);
        }
      });
    });
  });
  await Promise.all(_0xf2da58).then(_0x781cf8 => {}).catch(_0x420bc3 => {});
}
async function queryCoupon(_0x922284, _0x1cf317) {
  const _0x2f633c = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x922284,
    "x-tap": "wx",
    referer: "https://servicewechat.com/wxece3a9a4c82f58c9/532/page-frame.html",
    "mini-janus": "3%40s41AHfqDnza7twZ2HI4gXYAtN9eRII6d1C2B5eTDUozQHuWiR6VTpHEdvgDci1%3D%3D",
    "User-Agent": "Mozilla/5.0 (Linux; Android 13; Pixel 4 XL Build/TP1A.220905.004; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5197 MMWEBSDK/20221012 MMWEBID/3313 MicroMessenger/8.0.30.2260(0x28001E55) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
  };
  const _0x2e4759 = {
    condition: "",
    latitude: 30.17853,
    longitude: 120.221101,
    tabCode: "HONG_BAO",
    sourceFrom: "ELEME_WECHAT_MINIAPP",
    extInfo: "{\"miniAppVersion\":\"10.19.31\"}"
  };
  const _0xb1b039 = new Date().getTime();
  const _0x38e4cd = 12574478;
  var _0x2c54ce = "data=" + encodeURIComponent(JSON.stringify(_0x2e4759));
  const _0x6dbadb = _0x1cf317.split(";")[0],
    _0x72bd9c = _0x6dbadb.split("_")[0];
  const _0xa03178 = md5(_0x72bd9c + "&" + _0xb1b039 + "&" + _0x38e4cd + "&" + JSON.stringify(_0x2e4759), kami);
  const _0x325cb1 = {
    url: "https://waimai-guide.ele.me/h5/mtop.alsc.personal.querypasslist/1.0/2.0/?jsv=2.4.12&appKey=12574478&t=" + _0xb1b039 + "&sign=" + _0xa03178 + "&c=" + _0x1cf317 + "&api=mtop.alsc.personal.queryPassList&dataType=json&method=GET&timeout=10000&v=1.0&type=originaljson&ttid=wxece3a9a4c82f58c9%40wechat_android_11.1.5&accountSite=eleme&needLogin=true&ecole=1&_bx-m=1",
    method: "GET",
    headers: _0x2f633c,
    body: _0x2c54ce
  };
  return tryCatchPromise(_0x32d96c => {
    request(_0x325cb1, async (_0x5b4239, _0x42bd53, _0x1ab9b0) => {
      if (!_0x5b4239 && _0x42bd53.statusCode === 200) {
        try {
          const _0x4e5be0 = JSON.parse(_0x1ab9b0);
          if (_0x4e5be0.c) {
            _0x32d96c(_0x4e5be0.c);
          } else {
            if (_0x4e5be0.data.result) {
              let _0x4499d4 = _0x4e5be0.data.result.passInfoList[0];
              if (_0x4499d4) {
                let _0x1fa2fc = moment(new Date().getTime());
                let _0x59fafd = _0x1fa2fc.startOf("day").valueOf();
                let _0x5517ec = _0x4499d4.benefitList.filter(_0xaf2eac => _0xaf2eac.benefitType === "ELE_COMMODITY_HB");
                let _0x4581ac = _0x5517ec.filter(_0x8d128d => {
                  return _0x8d128d.gmtCreate === _0x59fafd / 1000 + "";
                });
                let _0x3d1a36 = _0x4581ac.filter(_0x6e0105 => _0x6e0105.amountText.amountText === "39");
                if (_0x3d1a36.length > 0) {
                  console.log("抢券成功", _0x3d1a36[0].title);
                  await couponNotify(_0x922284, "###抢券成功推送\n抢券成功", _0x3d1a36[0].title);
                  process.exit(0);
                } else {
                  console.log("抢券失败");
                  process.exit(0);
                }
              } else {
                console.log("抢券失败");
                process.exit(0);
              }
            } else {
              console.log("抢券失败");
              process.exit(0);
            }
          }
        } catch (_0x55f2d6) {
          console.log("查询抢券结果异常，请到 app 中查看");
          process.exit(0);
        }
      } else {
        console.log("抢券失败");
        process.exit(0);
      }
    });
  });
}
function syncTime() {
  const _0x157a9f = {
    "User-Agent": User_Agent
  };
  const _0x4fa19f = {
    url: "http://api.k780.com:88/?app=life.time&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json",
    method: "GET",
    headers: _0x157a9f
  };
  return tryCatchPromise(_0x803984 => {
    request(_0x4fa19f, async (_0x2bfe77, _0x1be3bb, _0x5e9548) => {
      if (!_0x2bfe77 && _0x1be3bb.statusCode === 200) {
        try {
          const _0x369e9a = JSON.parse(_0x5e9548);
          if (_0x369e9a.result) {
            _0x803984(_0x369e9a.result.timestamp);
          } else {
            _0x803984(null);
          }
        } catch (_0x157613) {
          _0x803984(null);
        }
      } else {
        _0x803984(null);
      }
    });
  });
}
async function start() {
  await validateCarmeWithType(kami, 1);
  const _0x4d25a7 = getCookies();
  for (let _0x173183 = 0; _0x173183 < _0x4d25a7.length; _0x173183++) {
    let _0x4d7c8d = _0x4d25a7[_0x173183];
    _0x4d7c8d = await checkCk(_0x4d7c8d, _0x173183);
    if (!_0x4d7c8d) {
      process.exit(0);
    }
    let _0x55c808 = await getUserInfo(_0x4d7c8d);
    if (!_0x55c808.username) {
      console.log("第", _0x173183 + 1, "账号失效！请重新登录！！！😭");
      process.exit(0);
    }
    const _0x1d4cae = _0x55c808.user_id;
    console.log("****** #" + (_0x173183 + 1), _0x55c808.mobile, "*********");
    console.log("账号的 id 为", _0x1d4cae);
    console.log("当前抢券线程数为", threadCount);
    let _0x4f740b = await queryintegralproperty(_0x4d7c8d);
    if (_0x4f740b !== -1 && _0x4f740b < 9999) {
      console.log("金币不够兑换 39 元券，程序结束");
      process.exit(0);
    }
    await checkCarmeCount(kami, _0x1d4cae, GAME_TYEP);
    let _0x43f6ba = await syncTime();
    if (!_0x43f6ba) {
      _0x43f6ba = new Date().getTime() / 1000;
    }
    let _0x4d48a3 = getNextDayZeroTimestamp(_0x43f6ba * 1000);
    let _0x36659d = _0x4d48a3 - _0x43f6ba * 1000 - 2000;
    console.log("程序将在", _0x36659d / 1000, "秒后开始抢券");
    setTimeout(async () => {
      runAfterTenSeconds(_0x4d7c8d);
      while (true) {
        await queryLotteryChance(_0x4d7c8d);
      }
    }, _0x36659d);
  }
}
function runAfterTenSeconds(_0x5b9c3b) {
  setTimeout(async () => {
    let _0xac647b = await queryCoupon(_0x5b9c3b, "64c767d7e6851eebe3c8cd476b0bc622_1692237574823;6f86648948993abca30366d96015297a");
    if (_0xac647b) {
      await queryCoupon(_0x5b9c3b, _0xac647b);
    }
    process.exit(0);
  }, 10000);
}
start();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
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
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}