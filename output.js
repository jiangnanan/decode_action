//Fri Aug 30 2024 01:18:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getToken,
  checkCk,
  validateCarmeWithType,
  User_Agent,
  checkCarmeCount,
  getUserInfo,
  tryCatchPromise
} = require("./common.js");
const request = require("request");
const moment = require("moment");
const md5 = require("md5");
const GAME_TYEP = 11;
function getCookies() {
  let _0x203ebd = [];
  if (process.env.elmqqck) {
    if (process.env.elmqqck.indexOf("&") > -1) {
      _0x203ebd = process.env.elmqqck.split("&");
    } else {
      if (process.env.elmqqck.indexOf("\n") > -1) {
        _0x203ebd = process.env.elmqqck.split("\n");
      } else {
        _0x203ebd = [process.env.elmqqck];
      }
    }
  }
  return _0x203ebd;
}
function getNextDayZeroTimestamp(_0x17ce30) {
  let _0x24d7c5 = moment(_0x17ce30);
  _0x24d7c5 = _0x24d7c5.add(1, "days").startOf("day");
  return _0x24d7c5.valueOf();
}
async function queryLotteryChance(_0x497cfd) {
  const _0x4f2833 = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x497cfd,
    "User-Agent": User_Agent
  };
  const _0x211ff5 = new Date().getTime();
  const _0x521bf8 = 12574478;
  const _0x4dfe30 = {
    actId: "20221207144029906162546384",
    collectionId: "20221216181231449964003945",
    copyId: "20230627110035952340005303",
    bizScene: "game_center",
    channel: "abcd",
    asac: "2A22C0239QW1FOL3UUQY7U"
  };
  const _0x2a8558 = "data=" + encodeURIComponent(JSON.stringify(_0x4dfe30));
  const _0x561e96 = getToken(_0x497cfd),
    _0x3031a8 = _0x561e96.split("_")[0];
  const _0x5a76f0 = md5(_0x3031a8 + "&" + _0x211ff5 + "&" + _0x521bf8 + "&" + JSON.stringify(_0x4dfe30));
  const _0x15a5e8 = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.koubei.interactioncenter.platform.right.exchange.v2/1.0/5.0/?jsv=2.7.1&SV=5.0&appKey=12574478&ttid=1601274958480%40eleme_android_10.14.3&t=" + _0x211ff5 + "&sign=" + _0x5a76f0 + "&api=mtop.koubei.interactioncenter.platform.right.exchange.v2",
    method: "POST",
    headers: _0x4f2833,
    body: _0x2a8558
  };
  return tryCatchPromise(_0x4e8b97 => {
    request(_0x15a5e8, async (_0x4ab902, _0x2fbd47, _0x3f57d6) => {
      if (!_0x4ab902 && _0x2fbd47.statusCode === 200) {
        try {
          const _0x3fbfc8 = JSON.parse(_0x3f57d6);
          if (_0x3fbfc8.data.data) {
            console.log("抢券成功", _0x3fbfc8.data.data[0].rightName);
            process.exit(0);
          } else {
            _0x4e8b97();
          }
        } catch (_0x560fe9) {
          console.log(_0x560fe9);
          _0x4e8b97(null);
        }
      } else {
        _0x4e8b97(null);
      }
    });
  });
}
function syncTime() {
  const _0x18edac = {
    "User-Agent": User_Agent
  };
  const _0x58002f = {
    url: "http://api.k780.com:88/?app=life.time&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json",
    method: "GET",
    headers: _0x18edac
  };
  return tryCatchPromise(_0x4ce7f4 => {
    request(_0x58002f, async (_0x154c4f, _0x4c2e0b, _0x4dbf84) => {
      if (!_0x154c4f && _0x4c2e0b.statusCode === 200) {
        try {
          const _0x22b8a3 = JSON.parse(_0x4dbf84);
          if (_0x22b8a3.result) {
            _0x4ce7f4(_0x22b8a3.result.timestamp);
          } else {
            _0x4ce7f4(null);
          }
        } catch (_0x33b19a) {
          _0x4ce7f4(null);
        }
      } else {
        _0x4ce7f4(null);
      }
    });
  });
}
async function start() {
  const _0x36d935 = process.env.ELE_CARME;
  await validateCarmeWithType(_0x36d935, 1);
  const _0x4c8358 = getCookies();
  for (let _0x505be3 = 0; _0x505be3 < _0x4c8358.length; _0x505be3++) {
    let _0x2342e6 = _0x4c8358[_0x505be3];
    _0x2342e6 = await checkCk(_0x2342e6, _0x505be3);
    if (!_0x2342e6) {
      continue;
    }
    let _0x4568b3 = await getUserInfo(_0x2342e6);
    if (!_0x4568b3.username) {
      console.log("第", _0x505be3 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    const _0x2da9db = _0x4568b3.user_id;
    await checkCarmeCount(_0x36d935, _0x2da9db, GAME_TYEP);
    console.log("******开始【饿了么账号", _0x505be3 + 1, "】", _0x4568b3.username, "*********");
    let _0x22ccde = await syncTime();
    if (!_0x22ccde) {
      _0x22ccde = new Date().getTime() / 1000;
    }
    let _0x46e63b = getNextDayZeroTimestamp(_0x22ccde * 1000);
    let _0x118958 = _0x46e63b - _0x22ccde * 1000 - 1000;
    console.log("将在", _0x118958 / 1000, "秒后开始抢券");
    setTimeout(async () => {
      runAfterTenSeconds();
      while (true) {
        await queryLotteryChance(_0x2342e6);
      }
    }, _0x118958);
  }
}
function runAfterTenSeconds() {
  setTimeout(() => {
    console.log("抢券失败");
    process.exit();
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