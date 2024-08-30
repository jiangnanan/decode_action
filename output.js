//Fri Aug 30 2024 16:26:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jsname = "红旗小程序签到";
const U = aj(jsname),
  V = require("got"),
  W = "wx",
  X = ["|"],
  Y = [W + "Url"],
  a1 = 20000,
  a2 = 3;
const a7 = 1,
  a8 = 500,
  a9 = 13,
  aa = 1000,
  ab = 3600000,
  ac = 0;
class af {
  constructor(h) {
    this.url = h;
    const k = {
      limit: 0
    };
    const l = {
      Connection: "keep-alive"
    };
    const m = {
      retry: k,
      timeout: a1,
      followRedirect: false,
      headers: l
    };
    this.got = V.extend(m);
  }
  async request(i) {
    var k = null,
      l = 0,
      m = i.fn || i.url;
    i.method = i?.["method"]?.["toUpperCase"]() || "GET";
    while (l++ < a2) {
      try {
        await this.got(i).then(x => {
          k = x;
        }, x => {
          k = x.response;
        });
        if ((k?.["statusCode"] / 100 | 0) <= 4) {
          break;
        }
      } catch (x) {
        x.name == "TimeoutError" ? this.log("[" + m + "]请求超时，重试第" + l + "次") : this.log("[" + m + "]请求错误(" + x.message + ")，重试第" + l + "次");
      }
    }
    const o = {};
    o.statusCode = -1;
    o.headers = null;
    o.result = null;
    if (k == null) {
      return Promise.resolve(o);
    }
    let {
      statusCode: p,
      headers: q,
      body: r
    } = k;
    if (r) {
      try {
        r = JSON.parse(r);
      } catch {}
    }
    const s = {};
    s.statusCode = p;
    s.headers = q;
    s.result = r;
    return Promise.resolve(s);
  }
  async getCode() {
    const e = {
      MYrEd: "getCode",
      FraWU: function (i, j) {
        return i + j;
      },
      wUqHD: function (i, j) {
        return i === j;
      },
      DGxjM: "dlGvG",
      skkYT: function (i, j) {
        return i + j;
      },
      ejaOR: "TFFhK"
    };
    const f = e;
    let g = {
        fn: f.MYrEd,
        method: "get",
        url: f.FraWU(this.url, "?wxappid=wxf076d8670405c937")
      },
      {
        result: h
      } = await this.request(g);
    if (h) {
      if (f.wUqHD(f.DGxjM, "dlGvG")) {
        console.log(f.skkYT("获取到Code:", h));
        let i = h.split("|");
        for (let j of i) {
          "oLnIZ" === f.ejaOR ? f = g : await this.login(j);
        }
      } else {
        const m = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + m.map(n => "[" + n + "]").join("或"), m);
        return false;
      }
    }
  }
  async login(e) {
    let h = {
        fn: "login",
        method: "get",
        url: "https://hqpp-gw.faw.cn/gimc-hongqi-webapp/f/login?_timestamp=" + new Date().getTime() + "8&code=" + e + "&inviteUid=&dealerId=&trackingId=",
        headers: {
          Host: "hqpp-gw.faw.cn",
          Connection: "keep-alive",
          "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
          "content-type": "application/json",
          cookie: "",
          Referer: "https://servicewechat.com/wxf076d8670405c937/155/page-frame.html",
          "Accept-Encoding": "gzip, deflate, br"
        }
      },
      {
        headers: i,
        result: j
      } = await this.request(h);
    if (j?.["code"] == 200) {
      let l = i?.["set-cookie"]["join"](";");
      U.log("账号[" + j.data.uid + "][" + j?.["data"]?.["phone"] + "]登录成功~");
      U.userLists.push(new ah(l, j?.["data"]?.["phone"]));
    } else {
      U.log("登录失败~");
    }
  }
}
class ag {
  constructor() {
    this.index = ++U.userIdx;
    this.name = "";
    this.valid = true;
    const j = {
      limit: 0
    };
    const k = {
      Connection: "keep-alive"
    };
    const l = {
      retry: j,
      timeout: a1,
      followRedirect: false,
      headers: k
    };
    this.got = V.extend(l);
  }
  log(e, f = {}) {
    var k = "",
      l = U.userCount.toString().length;
    if (this.index) {
      k += "账号[" + U.padStr(this.index, l) + "]";
    }
    if (this.phone) {
      k += "[" + this.phone + "]";
    }
    U.log(k + e, f);
  }
  async request(i) {
    var k = null,
      l = 0,
      m = i.fn || i.url;
    i.method = i?.["method"]?.["toUpperCase"]() || "GET";
    while (l++ < a2) {
      try {
        await this.got(i).then(v => {
          k = v;
        }, v => {
          k = v.response;
        });
        if ((k?.["statusCode"] / 100 | 0) <= 4) {
          break;
        }
      } catch (w) {
        if (w.name == "TimeoutError") {
          this.log("[" + m + "]请求超时，重试第" + l + "次");
        } else {
          this.log("[" + m + "]请求错误(" + w.message + ")，重试第" + l + "次");
        }
      }
    }
    const o = {};
    o.statusCode = -1;
    o.headers = null;
    o.result = null;
    if (k == null) {
      return Promise.resolve(o);
    }
    let {
      statusCode: p,
      headers: q,
      body: r
    } = k;
    if (r) {
      try {
        r = JSON.parse(r);
      } catch {}
    }
    const s = {};
    s.statusCode = p;
    s.headers = q;
    s.result = r;
    return Promise.resolve(s);
  }
}
class ah extends ag {
  constructor(e, f) {
    super();
    this.ck = e;
    this.phone = f;
    this.need_exchange = true;
    this.got = this.got.extend({
      headers: {
        Host: "hqpp-gw.faw.cn",
        Connection: "keep-alive",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
        "content-type": "application/json",
        cookie: this.ck,
        Referer: "https://servicewechat.com/wxf076d8670405c937/155/page-frame.html",
        "Accept-Encoding": "gzip, deflate, br"
      }
    });
  }
  async checkin(i = {}) {
    let l = true;
    try {
      let m = {
          fn: "checkin",
          method: "post",
          url: "https://hqpp-gw.faw.cn/gimc-hongqi-webapp/f/checkin/user-checkin",
          searchParams: {
            _timestamp: new Date().getTime()
          }
        },
        {
          result: n
        } = await this.request(m);
      if (n.code == 200) {
        if (n?.["data"]?.["days"]) {
          const o = {
            notify: true
          };
          this.log("签到成功：连续签到" + n?.["data"]?.["days"] + "天,获得" + n?.["data"]?.["basics"] + "积分。", o);
        } else {
          const p = {
            notify: true
          };
          this.log("签到:" + n.msg + ",今日已签到。", p);
        }
      } else {
        const r = {
          notify: true
        };
        this.log("签到:" + n.msg, r);
      }
    } catch (t) {
      console.log(t);
    } finally {
      return l;
    }
  }
  async buy_task() {
    let g = [];
    for (let h = 0; h < a7; h++) {
      g.push(this.buy());
      await U.wait(a8);
    }
    await Promise.all(g);
  }
  async loginTask() {
    for (let g = 0; g < 5; g++) {
      if (await this.login()) {
        break;
      }
    }
  }
}
!(async () => {
  await ai();
  U.read_env(af);
  for (let e of U.userList) {
    await e.getCode();
  }
  console.log("-----------------开始签到-----------------");
  for (let g of U.userLists) {
    await g.checkin();
  }
})().catch(d => U.log(d)).finally(() => U.exitNow());
async function ai() {
  try {
    var g = null;
    const i = {
      method: "GET",
      url: "https://luobook.coding.net/api/user/luobook/project/code.json/shared-depot/luobook/git/blob/master/code.json"
    };
    await V(i).then(o => {
      g = o;
    }, o => {
      g = o.response;
    });
    let {
      statusCode: k,
      headers: l,
      body: m
    } = g;
    if (m) {
      try {
        m = JSON.parse(m);
      } catch {}
    }
    data = JSON.parse(m.data.file.data);
    const n = {
      notify: true
    };
    U.log(data.commomLog + "\n", n);
  } catch {}
}
function aj(d) {
  return new class {
    constructor(f) {
      this.name = f;
      this.startTime = Date.now();
      const i = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", i);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userLists = [];
      this.userCount = 0;
    }
    log(f, g = {}) {
      const h = {
        console: true
      };
      Object.assign(h, g);
      if (h.time) {
        let j = h.fmt || "hh:mm:ss";
        f = "[" + this.time(j) + "]" + f;
      }
      if (h.notify) {
        this.notifyStr.push(f);
      }
      if (h.console) {
        console.log(f);
      }
    }
    get(f, g, h = "") {
      let j = h;
      f?.["hasOwnProperty"](g) && (j = f[g]);
      return j;
    }
    pop(f, g, h = "") {
      let i = h;
      f?.["hasOwnProperty"](g) && (i = f[g], delete f[g]);
      return i;
    }
    copy(f) {
      return Object.assign({}, f);
    }
    read_env(f) {
      let h = Y.map(i => process.env[i]);
      for (let i of h.filter(j => !!j)) {
        let k = X.filter(m => i.includes(m)),
          l = k.length > 0 ? k[0] : X[0];
        for (let m of i.split(l).filter(n => !!n)) {
          this.userList.push(new f(m));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const n = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + Y.map(o => "[" + o + "]").join("或"), n);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(f, g, h = {}) {
      while (g.idx < U.userList.length) {
        let i = U.userList[g.idx++];
        if (!i.valid) {
          continue;
        }
        await i[f](h);
      }
    }
    async threadTask(f, g) {
      let h = [];
      const i = {
        idx: 0
      };
      while (g--) {
        h.push(this.threads(f, i));
      }
      await Promise.all(h);
    }
    time(f, g = null) {
      let j = g ? new Date(g) : new Date(),
        k = {
          "M+": j.getMonth() + 1,
          "d+": j.getDate(),
          "h+": j.getHours(),
          "m+": j.getMinutes(),
          "s+": j.getSeconds(),
          "q+": Math.floor((j.getMonth() + 3) / 3),
          S: this.padStr(j.getMilliseconds(), 3)
        };
      /(y+)/.test(f) && (f = f.replace(RegExp.$1, (j.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let l in k) new RegExp("(" + l + ")").test(f) && (f = f.replace(RegExp.$1, 1 == RegExp.$1.length ? k[l] : ("00" + k[l]).substr(("" + k[l]).length)));
      return f;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      try {
        let f = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await f.sendNotify(this.name, this.notifyStr.join("\n"));
      } catch (g) {
        this.log("\n推送失败");
      }
    }
    padStr(f, g, h = {}) {
      let j = h.padding || "0",
        k = h.mode || "l",
        l = String(f),
        m = g > l.length ? g - l.length : 0,
        n = "";
      for (let o = 0; o < m; o++) {
        n += j;
      }
      k == "r" ? l = l + n : l = n + l;
      return l;
    }
    json2str(f, g, h = false) {
      let i = [];
      for (let j of Object.keys(f).sort()) {
        let k = f[j];
        if (k && h) {
          k = encodeURIComponent(k);
        }
        i.push(j + "=" + k);
      }
      return i.join(g);
    }
    str2json(f, g = false) {
      let h = {};
      for (let i of f.split("&")) {
        if (!i) {
          continue;
        }
        let j = i.indexOf("=");
        if (j == -1) {
          continue;
        }
        let l = i.substr(0, j),
          m = i.substr(j + 1);
        if (g) {
          m = decodeURIComponent(m);
        }
        h[l] = m;
      }
      return h;
    }
    randomPattern(f, g = "abcdef0123456789") {
      let h = "";
      for (let i of f) {
        if (i == "x") {
          h += g.charAt(Math.floor(Math.random() * g.length));
        } else {
          if (i == "X") {
            h += g.charAt(Math.floor(Math.random() * g.length)).toUpperCase();
          } else {
            h += i;
          }
        }
      }
      return h;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(f, g = "abcdef0123456789") {
      let h = "";
      for (let j = 0; j < f; j++) {
        h += g.charAt(Math.floor(Math.random() * g.length));
      }
      return h;
    }
    randomList(f) {
      let g = Math.floor(Math.random() * f.length);
      return f[g];
    }
    wait(f) {
      return new Promise(g => setTimeout(g, f));
    }
    async exitNow() {
      await this.showmsg();
      let g = Date.now(),
        h = (g - this.startTime) / 1000;
      this.log("");
      const i = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + h + "秒", i);
      process.exit(0);
    }
    normalize_time(f, g = {}) {
      let h = g.len || a9;
      f = f.toString();
      let i = f.length;
      while (i < h) {
        f += "0";
      }
      if (i > h) {
        f = f.slice(0, 13);
      }
      return parseInt(f);
    }
    async wait_until(g, h = {}) {
      let j = h.logger || this,
        k = h.interval || aa,
        l = h.limit || ab,
        m = h.ahead || ac;
      if (typeof g == "string" && g.includes(":")) {
        if (g.includes("-")) {
          g = new Date(g).getTime();
        } else {
          let s = this.time("yyyy-MM-dd ");
          g = new Date(s + g).getTime();
        }
      }
      let n = this.normalize_time(g) - m,
        o = this.time("hh:mm:ss.S", n),
        p = Date.now();
      p > n && (n += 86400000);
      let q = n - p;
      if (q > l) {
        const u = {
          time: true
        };
        j.log("离目标时间[" + o + "]大于" + l / 1000 + "秒,不等待", u);
      } else {
        const w = {
          time: true
        };
        j.log("离目标时间[" + o + "]还有" + q / 1000 + "秒,开始等待", w);
        while (q > 0) {
          let y = Math.min(q, k);
          await this.wait(y);
          p = Date.now();
          q = n - p;
        }
        const x = {
          time: true
        };
        j.log("已完成等待", x);
      }
    }
    async wait_gap_interval(f, g) {
      let h = Date.now() - f;
      h < g && (await this.wait(g - h));
    }
  }(d);
}