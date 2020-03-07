var __reflect = this && this.__reflect ||
function(e, t, o) {
	e.__class__ = t, o ? o.push(t) : o = [t], e.__types__ = e.__types__ ? o.concat(e.__types__) : o
}, __extends = this && this.__extends ||
function(e, t) {
	function o() {
		this.constructor = e
	}
	for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	o.prototype = t.prototype, e.prototype = new o
}, __assign = this && this.__assign || Object.assign ||
function(e) {
	for (var t, o = 1, n = arguments.length; n > o; o++) {
		t = arguments[o];
		for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
	}
	return e
}, __awaiter = this && this.__awaiter ||
function(e, t, o, n) {
	return new(o || (o = Promise))(function(r, i) {
		function a(e) {
			try {
				u(n.next(e))
			} catch (t) {
				i(t)
			}
		}
		function s(e) {
			try {
				u(n["throw"](e))
			} catch (t) {
				i(t)
			}
		}
		function u(e) {
			e.done ? r(e.value) : new o(function(t) {
				t(e.value)
			}).then(a, s)
		}
		u((n = n.apply(e, t || [])).next())
	})
}, __generator = this && this.__generator ||
function(e, t) {
	function o(e) {
		return function(t) {
			return n([e, t])
		}
	}
	function n(o) {
		if (r) throw new TypeError("Generator is already executing.");
		for (; u;) try {
			if (r = 1, i && (a = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(a = a.call(i, o[1])).done) return a;
			switch (i = 0, a && (o = [0, a.value]), o[0]) {
			case 0:
			case 1:
				a = o;
				break;
			case 4:
				return u.label++, {
					value: o[1],
					done: !1
				};
			case 5:
				u.label++, i = o[1], o = [0];
				continue;
			case 7:
				o = u.ops.pop(), u.trys.pop();
				continue;
			default:
				if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
					u = 0;
					continue
				}
				if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
					u.label = o[1];
					break
				}
				if (6 === o[0] && u.label < a[1]) {
					u.label = a[1], a = o;
					break
				}
				if (a && u.label < a[2]) {
					u.label = a[2], u.ops.push(o);
					break
				}
				a[2] && u.ops.pop(), u.trys.pop();
				continue
			}
			o = t.call(e, u)
		} catch (n) {
			o = [6, n], i = 0
		} finally {
			r = a = 0
		}
		if (5 & o[0]) throw o[1];
		return {
			value: o[0] ? o[1] : void 0,
			done: !0
		}
	}
	var r, i, a, s, u = {
		label: 0,
		sent: function() {
			if (1 & a[0]) throw a[1];
			return a[1]
		},
		trys: [],
		ops: []
	};
	return s = {
		next: o(0),
		"throw": o(1),
		"return": o(2)
	}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
		return this
	}), s
}, core;
!
function(e) {
	e.MAX_COL = 11, e.MAX_ROW = 15, e.B0 = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21];
	var t;
	!
	function(e) {
		e[e.EMPTY = 0] = "EMPTY", e[e.FILLED = 1] = "FILLED", e[e.NONE = 15] = "NONE"
	}(t = e.EFilterType || (e.EFilterType = {}));
	var o = function() {
			function e() {}
			return e.NONE = 0, e
		}();
	e.NodeType = o, __reflect(o.prototype, "core.NodeType");
	var n = [
		[-1, -1],
		[-1, 0],
		[0, 1],
		[1, 0],
		[1, -1],
		[0, -1]
	],
		r = [
			[-1, 0],
			[-1, 1],
			[0, 1],
			[1, 1],
			[1, 0],
			[0, -1]
		],
		i = function() {
			function i() {
				this._map = [], this._rows = 0, this._cols = 0, this._maxRow = 0, this._next = [], this._types = []
			}
			return i.getIns = function() {
				return this._instance || (this._instance = new i), this._instance
			}, i.prototype.setMap = function(e, t, o) {
				var n = e.length,
					r = e[0] ? e[0].length : 0;
				(0 >= n || 0 >= r) && console.warn("传入了不合法的地图数据！！！"), this._rows = n, this._cols = r, this._map.length = 0, this._map = e, this._maxRow = this._countMaxRow(), this.setTypes(t), this.setNext(o)
			}, i.prototype._countMaxRow = function() {
				for (var e = this._rows - 1, t = this._cols, n = this._map; e >= 0;) {
					for (var r = 0; t - e % 2 > r; r++) if (n[e] && n[e][r] != o.NONE) return this._maxRow = e, e;
					e--
				}
			}, i.prototype._alzTypes = function() {
				for (var e = this._map, t = this._maxRow, n = this._cols, r = this._types, i = t; i >= 0; i--) {
					n = this.getCols(i);
					for (var a = 0; n > a; a++) e[i][a] !== o.NONE && (240 & e[i][a] || r.indexOf(e[i][a]) >= 0 || r.push(e[i][a]))
				}
			}, i.prototype.setTypes = function(e) {
				this._types.length = 0, e ? this._types = JSON.parse(JSON.stringify(e)) : this._alzTypes()
			}, i.prototype.setNext = function(e) {
				this._next.length = 0, e ? this._next = JSON.parse(JSON.stringify(e)) : this._next.length = 0
			}, i.prototype.getMap = function() {
				return this._map
			}, i.prototype.isEmpty = function() {
				var e = this._maxRow,
					t = this._map,
					n = this._cols;
				if (e > 0) return !1;
				for (var r = 0; n - e % 2 > r; r++) if (t[e][r] !== o.NONE) return !1;
				return !0
			}, i.prototype.isOverflow = function() {
				var t = this._maxRow;
				return t >= e.MAX_ROW
			}, i.prototype.getRows = function() {
				return this._rows
			}, i.prototype.getCols = function(e) {
				return this._map[e] && this._map[e].length || this._cols
			}, i.prototype.getMaxRow = function() {
				return this._maxRow
			}, i.prototype.getNodeVal = function(e, t) {
				return this._map[e][t]
			}, i.prototype.getNextVal = function() {
				return this._next.length <= 0 ? this.createNode() : this._next.pop()
			}, i.prototype.addNode = function(e, t, n) {
				this._checkArea(e, t) && (e > this._maxRow && (this._maxRow = e), this._map[e] || (this._map[e] = utils.Fill([], o.NONE, 0, this._cols - e % 2), this._rows++), this._map[e][t] = n)
			}, i.prototype.removeNodes = function(e) {
				for (var t = this, n = 0; n < e.length; n++) e[n].row < 0 || (t._map[e[n].row][e[n].col] = o.NONE);
				this._maxRow = this._countMaxRow()
			}, i.prototype.getTypes = function(e) {
				for (var t = [], o = this._map, n = 0; n < e.length; n++) t.indexOf(o[e[n].row][e[n].col]) < 0 && t.push(o[e[n].row][e[n].col]);
				return t
			}, i.prototype.createNode = function(e) {
				var t = Math.floor(Math.random() * this._types.length);
				return this._types[t]
			}, i.prototype.getNeighbors = function(e, i, a) {
				void 0 === a && (a = t.NONE);
				for (var s = this, u = [], h = -1, c = -1, l = e % 2 ? r : n, _ = 0; _ < l.length; _++) h = e + l[_][0], c = i + l[_][1], s._checkArea(h, c) && u.push({
					row: h,
					col: c
				});
				return a == t.EMPTY ? u = u.filter(function(e) {
					var t = e.row,
						n = e.col;
					return !s._map[t] || s._map[t][n] === o.NONE
				}) : a == t.FILLED && (u = u.filter(function(e) {
					var t = e.row,
						n = e.col;
					return s._map[t] && s._map[t][n] !== o.NONE
				})), u
			}, i.prototype.getCombos = function(e, o, n) {
				if (!this._checkArea(e, o)) return {};
				n && n.length || (n = [this._map[e][o]]);
				for (var r, i, a, s, u = this, h = u._map, c = u._createMapModel(), l = [], _ = {}, p = []; n.length;) {
					for (r = n.pop(), l = [{
						row: e,
						col: o
					}], p.push({
						row: e,
						col: o
					}), c[e][o] = 1; p.length;) {
						i = p.pop(), s = u.getNeighbors(i.row, i.col, t.FILLED);
						for (var d = 0; d < s.length; d++) a = s[d], c[a.row][a.col] || r === h[a.row][a.col] && (p.push(a), l.push(a), c[a.row][a.col] = 1)
					}
					_[r] = l
				}
				return _
			}, i.prototype.getConnectedNode = function(e) {
				for (var n = this, r = n._createMapModel(e), i = [], a = null, s = null, u = null, h = 0, c = 0; c < n._cols; c++) if (!r[0][c] && n._map[0][c] && n._map[0][c] !== o.NONE) for (i.push({
					row: h,
					col: c
				}), r[h][c] = 1; i.length;) {
					a = i.pop(), u = n.getNeighbors(a.row, a.col, t.FILLED);
					for (var l = 0; l < u.length; l++) s = u[l], r[s.row][s.col] || (i.push(s), r[s.row][s.col] = 1)
				}
				return r
			}, i.prototype.getNoConnectNode = function(e) {
				for (var t = this, n = t._maxRow, r = t._cols, i = [], a = this.getConnectedNode(e), s = n; s >= 0; s--) {
					r = t.getCols(s);
					for (var u = 0; r > u; u++) a[s][u] || t._map[s][u] === o.NONE || i.push({
						row: s,
						col: u
					})
				}
				return i
			}, i.prototype._checkArea = function(e, t) {
				return !(0 > e || 0 > t || t >= this._cols - e % 2)
			}, i.prototype._createMapModel = function(e) {
				for (var t = [], o = this._maxRow, n = this._cols, r = o; r >= 0; r--) {
					t[r] = [], n = this.getCols(r);
					for (var i = 0; n > i; i++) t[r][i] = 0
				}
				if (e && e.length) for (var a = 0; a < e.length; a++) e[a].row < 0 || (t[e[a].row][e[a].col] = 1);
				return t
			}, i
		}();
	__reflect(i.prototype, "Model"), e.model = new i
}(core || (core = {}));
var df;
!
function(e) {
	e.TOOL_MASK = 240;
	var t = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return __extends(t, e), t.ALPHA = 16, t.RED = 1, t.YELLOW = 2, t.BLUE = 3, t.GREEN = 4, t.ORANGE = 5, t.PURPLE = 6, t.PINK = 7, t.BLACK = 8, t.BOMB = 9, t.CLOUD = 8, t.LIGHT = 10, t.PUZZLE = 11, t.COLOR = 31, t.BOMB2 = 17, t.HUMMER = 18, t.COIN = 19, t
		}(core.NodeType);
	e.BubbleType = t, __reflect(t.prototype, "df.BubbleType"), e.BubbleResMap = (i = {}, i[t.NONE] = "", i[t.RED] = "bubble_red_png", i[t.YELLOW] = "bubble_yellow_png", i[t.BLUE] = "bubble_blue_png", i[t.GREEN] = "bubble_green_png", i[t.ORANGE] = "bubble_orange_png", i[t.PURPLE] = "bubble_purple_png", i[t.PINK] = "bubble_pink_png", i[t.BLACK] = "bubble_black_png", i[t.ALPHA] = "", i[t.COLOR] = "prop_colorBall_png", i[t.BOMB2] = "prop_bomb_png", i[t.COIN] = "icon_coin_png", i[t.HUMMER] = "prop_hammer_png", i), e.BubbleName = (a = {}, a[t.NONE] = "没", a[t.RED] = "红", a[t.YELLOW] = "黄", a[t.BLUE] = "蓝", a[t.GREEN] = "绿", a[t.ORANGE] = "橙", a[t.PURPLE] = "紫", a[t.PINK] = "粉", a[t.BLACK] = "黑", a[t.ALPHA] = "透明", a[t.COLOR] = "彩色", a[t.BOMB2] = "炸弹", a[t.COIN] = "金币", a[t.HUMMER] = "锤子", a);
	var o;
	!
	function(e) {
		e[e.BUBBLE = 1] = "BUBBLE", e[e.TOP_WALL = 2] = "TOP_WALL", e[e.SIDE_WALL = 3] = "SIDE_WALL", e[e.BOTTOM_WALL = 4] = "BOTTOM_WALL", e[e.NONE = 0] = "NONE"
	}(o = e.HIT || (e.HIT = {}));
	var n;
	!
	function(e) {
		e[e.FREE = 0] = "FREE", e[e.PLAYING = 1] = "PLAYING", e[e.END = 2] = "END"
	}(n = e.EGameStatus || (e.EGameStatus = {}));
	var r;
	!
	function(e) {
		e[e.NONE = 0] = "NONE", e[e.LV = 1] = "LV", e[e.FREE = 2] = "FREE"
	}(r = e.EGameModel || (e.EGameModel = {})), e.MAX_COL = 11, e.MAX_ROW = 14, e.MIN_ANGLE = -75, e.MAX_ANGLE = 75, e.BUBBLE_FLY_SPEED_Y = 14, e.RADIUS = 28, e.ROTATION = 20, e.EVT_NEXT_ROUND = "next_round", e.SPEED_X = 5, e.SPEED_Y = 8, e.U = .6, e.G = .9, e.SHAKE_COUNT = 8, e.SHAKE_SPEED = 10, e.B1 = [16, 16, 16, 16, 16, 16, 16, 16, 16, 16], e.NAME = "游客", e.ID = 9527, e.COIN = 180, e.TOOL_COUNT = 1, e.MAX_SCORE = 0, e.COMBO_LV = [8, 16, 24], e.COMBOS_CELL_SCORE = 10, e.COMBOS_BONUS = [8, 16, 32], e.GAME_TIME = 30, e.BONUS = [5, 10, 30], e.SCORE_CHANGE_COIN = 10, e.COMPLETION_CHANGE_COIN = 10, e.SCORE_LV = [30, 60, 100], e.TOOL_PRICE = {
		hummer: 80,
		bomb: 180,
		color: 240,
		guid: 100
	};
	var i, a
}(df || (df = {}));
var view;
!
function(e) {
	var t;
	!
	function(e) {
		e[e.NONE = 0] = "NONE", e[e.PAGE = 1] = "PAGE", e[e.GAME = 2] = "GAME", e[e.PANEL = 3] = "PANEL", e[e.MSG = 4] = "MSG", e[e.OTHER = 5] = "OTHER"
	}(t = e.EViewType || (e.EViewType = {}));
	var o = function(e) {
			function o() {
				return null !== e && e.apply(this, arguments) || this
			}
			return __extends(o, e), o.prototype.init = function(e) {
				var t = this;
				t._stageWidth = e.stage.stageWidth, t._stageHeight = e.stage.stageHeight, e.addChild(t), t._pageMap = {}, t._panelMap = {}, t._initCom(), t._initLayer()
			}, o.prototype._initLayer = function() {
				var e = this;
				e._pageLayer = new eui.UILayer, e._gameLayer = new eui.UILayer, e._panelLayer = new eui.UILayer, e._msgLayer = new eui.UILayer, e._gameLayer.touchThrough = !0, e._panelLayer.touchThrough = !0, e._msgLayer.touchThrough = !0, e.addChild(e._pageLayer), e.addChild(e._gameLayer), e.addChild(e._panelLayer), e.addChild(e._msgLayer)
			}, o.prototype._initCom = function() {
				var e = this;
				e._curPage = null, e._curPanel = null
			}, o.prototype.showPage = function(e, t, o) {
				return __awaiter(this, void 0, void 0, function() {
					var n, r, i;
					return __generator(this, function(a) {
						switch (a.label) {
						case 0:
							return n = this, r = [], r.push(n._showPage(e, t, o)), n._curPage && n._curPage.viewName !== e && r.push(n._closePage(n._curPage.viewName, __assign({}, t, {
								isReverse: !0
							}))), [4, Promise.all(r)];
						case 1:
							return i = a.sent()[0], n._curPage = i, [2]
						}
					})
				})
			}, o.prototype._showPage = function(e, t, o) {
				var n = this,
					r = n._pageMap[e];
				return r ? (r.onPreShow && r.onPreShow.apply(r, o), ui.Am.show(n._pageLayer, r, t).then(function() {
					return r.onPostShow && r.onPostShow(), Promise.resolve(r)
				})) : (console.warn("page【" + e + "】没有注册"), Promise.resolve(null))
			}, o.prototype.closePage = function(e, t) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(o) {
						switch (o.label) {
						case 0:
							return e = e || this._curPage.viewName, [4, this._closePage(e, t)];
						case 1:
							return o.sent(), [2]
						}
					})
				})
			}, o.prototype._closePage = function(e, t) {
				var o = this,
					n = o._pageMap[e];
				return n ? (n.onPreClose && n.onPreClose(), ui.Am.close(o._pageLayer, n, t).then(function() {
					return n.onPostClose && n.onPostClose(), Promise.resolve(n)
				})) : (console.warn("page【" + e + "】没有注册"), Promise.resolve(null))
			}, o.prototype.showPanel = function(e, t, o) {
				return __awaiter(this, void 0, void 0, function() {
					var n, r;
					return __generator(this, function(i) {
						switch (i.label) {
						case 0:
							return n = this, n._curPanel ? [4, n._closePanel(n._curPanel.viewName, __assign({}, t, {
								isReverse: !0
							}))] : [3, 2];
						case 1:
							i.sent(), i.label = 2;
						case 2:
							return r = n, [4, n._showPanel(e, t, o)];
						case 3:
							return r._curPanel = i.sent(), [2]
						}
					})
				})
			}, o.prototype._showPanel = function(e, t, o) {
				var n = this,
					r = n._panelMap[e];
				return r ? (r.onPreShow && r.onPreShow.apply(r, o), ui.Am.show(n._panelLayer, r, __assign({}, t, {
					dark: !0
				})).then(function() {
					return r.onPostShow && r.onPostShow(), Promise.resolve(r)
				})) : (console.warn("panel【" + e + "】没有注册"), Promise.resolve(r))
			}, o.prototype.closePanel = function(e, t) {
				return __awaiter(this, void 0, void 0, function() {
					var o;
					return __generator(this, function(n) {
						switch (n.label) {
						case 0:
							return e ? [3, 3] : this._curPanel ? [4, this._closePanel(this._curPanel.viewName, t)] : [3, 2];
						case 1:
							o = n.sent(), n.label = 2;
						case 2:
							return [3, 5];
						case 3:
							return [4, this._closePanel(e, t)];
						case 4:
							o = n.sent(), n.label = 5;
						case 5:
							return o == this._curPanel && (this._curPanel = null), [2]
						}
					})
				})
			}, o.prototype._closePanel = function(e, t) {
				var o = this,
					n = o._panelMap[e];
				return n ? (n.onPreClose && n.onPreClose(), ui.Am.close(o._panelLayer, n, __assign({}, t)).then(function() {
					return n.onPostClose && n.onPostClose(), Promise.resolve(n)
				})) : (console.warn("panel【" + e + "】没有注册"), Promise.resolve(n))
			}, o.prototype.register = function(e) {
				var o, n = this,
					r = e.viewName,
					i = e.viewType;
				switch (i) {
				case t.PAGE:
					o = n._pageMap;
					break;
				case t.PANEL:
					o = n._panelMap;
					break;
				default:
					return !1
				}
				return o[r] ? !1 : (o[r] = e, !0)
			}, o
		}(eui.UILayer);
	__reflect(o.prototype, "ViewMrg"), e.viewMrg = new o
}(view || (view = {}));
var AssetAdapter = function() {
		function e() {}
		return e.prototype.getAsset = function(e, t, o) {
			function n(n) {
				t.call(o, n, e)
			}
			if (RES.hasRes(e)) {
				var r = RES.getRes(e);
				r ? n(r) : RES.getResAsync(e, n, this)
			} else RES.getResByUrl(e, n, this, RES.ResourceItem.TYPE_IMAGE)
		}, e
	}();
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var ThemeAdapter = function() {
		function e() {}
		return e.prototype.getTheme = function(e, t, o, n) {
			function r(e) {
				t.call(n, e)
			}
			function i(t) {
				t.resItem.url == e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, i, null), o.call(n))
			}
			var a = this;
			if ("undefined" != typeof generateEUI) egret.callLater(function() {
				t.call(n, generateEUI)
			}, this);
			else if ("undefined" != typeof generateEUI2) RES.getResByUrl("resource/gameEui.json", function(e, o) {
				window.JSONParseClass.setData(e), egret.callLater(function() {
					t.call(n, generateEUI2)
				}, a)
			}, this, RES.ResourceItem.TYPE_JSON);
			else if ("undefined" != typeof generateJSON) if (e.indexOf(".exml") > -1) {
				var s = e.split("/");
				s.pop();
				var u = s.join("/") + "_EUI.json";
				generateJSON.paths[e] ? egret.callLater(function() {
					t.call(n, generateJSON.paths[e])
				}, this) : RES.getResByUrl(u, function(o) {
					window.JSONParseClass.setData(o), egret.callLater(function() {
						t.call(n, generateJSON.paths[e])
					}, a)
				}, this, RES.ResourceItem.TYPE_JSON)
			} else egret.callLater(function() {
				t.call(n, generateJSON)
			}, this);
			else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, i, null), RES.getResByUrl(e, r, this, RES.ResourceItem.TYPE_TEXT)
		}, e
	}();
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var ui;
!
function(e) {
	var t = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.anchorOffsetX = 19, t.anchorOffsetY = 80, t
			}
			return __extends(t, e), t.prototype.setValue = function(e) {
				e != this._value && (this._value = e, this._updateRes())
			}, t.prototype._updateRes = function() {
				var e = "";
				switch (this._value) {
				case df.BubbleType.RED:
					e = "arrow_red_png";
					break;
				case df.BubbleType.YELLOW:
					e = "arrow_yellow_png";
					break;
				case df.BubbleType.BLUE:
					e = "arrow_blue_png";
					break;
				case df.BubbleType.GREEN:
					e = "arrow_green_png";
					break;
				case df.BubbleType.ORANGE:
					e = "arrow_orange_png";
					break;
				case df.BubbleType.PINK:
					e = "arrow_pink_png";
					break;
				case df.BubbleType.PURPLE:
					e = "arrow_purple_png";
					break;
				default:
					e = "arrow_white_png"
				}
				this.source = RES.getRes(e)
			}, t.prototype.rotate = function(e) {
				this.visible && (this.rotation = e)
			}, t.prototype.show = function(e) {
				this.visible = !0, this.rotate(e)
			}, t.prototype.hide = function() {
				this.visible = !1, this.rotation = 0
			}, t.prototype.reset = function() {
				this.rotation = 0
			}, t
		}(eui.Image);
	e.Arrow = t, __reflect(t.prototype, "ui.Arrow")
}(ui || (ui = {}));
var ui;
!
function(e) {
	var t = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.width = 2 * df.RADIUS, t.height = 2 * df.RADIUS, t.anchorOffsetX = df.RADIUS, t.anchorOffsetY = df.RADIUS, t.reset(), t
			}
			return __extends(t, e), t.prototype.setValue = function(e) {
				this.value != e && (this.value = e, e & df.TOOL_MASK && (this._rotation = df.ROTATION), this._updateRes())
			}, t.prototype.setAngle = function(e) {
				e > df.MAX_ANGLE || e < df.MIN_ANGLE || (this.angle = e, Math.abs(e) < 35 ? (this.speedY = 1.4 * -df.BUBBLE_FLY_SPEED_Y, this.speedX = Math.tan(e * Math.PI / 180) * Math.abs(this.speedY)) : (this.speedY = -df.BUBBLE_FLY_SPEED_Y, this.speedX = Math.tan(e * Math.PI / 180) * Math.abs(this.speedY)))
			}, t.prototype.stop = function() {
				this.speedX = 0, this.speedY = 0, this.angle = 0, this.g = 0, this.rotation = 0
			}, t.prototype._updateRes = function() {
				var e = this.value;
				this.source = df.BubbleResMap[e]
			}, t.prototype.reset = function() {
				var e = this;
				e.g = 0, e.angle = 0, e.speedX = 0, e.speedY = 0, e._rotation = 0, e.row = -1, e.col = -1, e.centerX = 0, e.centerY = 0, e.x = 0, e.y = 0, e.rotation = 0, e.visible = !0, this.value = df.BubbleType.NONE
			}, t
		}(eui.Image);
	e.Bubble = t, __reflect(t.prototype, "ui.Bubble")
}(ui || (ui = {}));
var ui;
!
function(e) {
	var t = 5,
		o = 170,
		n = function() {
			function n() {
				this._pool = []
			}
			return n.getIns = function() {
				var e = this;
				return e._instance || (e._instance = new n), e._instance
			}, n.prototype.getSize = function() {
				return this._pool.length
			}, n.prototype.createBubble = function(e) {
				if (e == core.NodeType.NONE) return null;
				var t = this._pop();
				return t.setValue(e), t
			}, n.prototype._pop = function() {
				return this._pool.length <= 0 && this._extendPool(), this._pool.pop()
			}, n.prototype._extendPool = function() {
				for (var o = 0; t > o; o++) this._pool.push(new e.Bubble)
			}, n.prototype.recycleBubble = function(e) {
				e.parent && e.parent.removeChild(e), e.reset(), this._push(e)
			}, n.prototype._push = function(e) {
				this._pool.length > o && this._reducePool(), this._pool.push(e)
			}, n.prototype._reducePool = function() {
				this._pool.length = this._pool.length / 2 >> 0
			}, n
		}();
	__reflect(n.prototype, "BubblePool"), e.bubblePool = new n
}(ui || (ui = {}));
var ui;
!
function(e) {
	var t = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.addEventListener(egret.Event.ADDED_TO_STAGE, t._onAddToStage, t), t
			}
			return __extends(t, e), t.prototype.childrenCreated = function() {
				e.prototype.childrenCreated.call(this)
			}, t.prototype._onAddToStage = function(e) {
				var t = this;
				t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t._onTouchBegin, t), t.addEventListener(egret.TouchEvent.TOUCH_END, t._onTouchEnd, t), t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, t._onTouchEnd, t), t.addEventListener(egret.TouchEvent.TOUCH_CANCEL, t._onTouchEnd, t), t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t._onRemoveFromStage, t)
			}, t.prototype._onRemoveFromStage = function() {
				var e = this;
				e.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, e._onTouchBegin, e), e.removeEventListener(egret.TouchEvent.TOUCH_END, e._onTouchEnd, e), e.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, e._onTouchEnd, e), e.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, e._onTouchEnd, e), e.removeEventListener(egret.Event.REMOVED_FROM_STAGE, e._onRemoveFromStage, e)
			}, t.prototype._onTouchBegin = function(e) {
				this.scaleX = 1.1, this.scaleY = 1.1
			}, t.prototype._onTouchEnd = function(e) {
				this.scaleX = 1, this.scaleY = 1
			}, t
		}(eui.Image);
	e.ImageButton = t, __reflect(t.prototype, "ui.ImageButton")
}(ui || (ui = {}));
var ui;
!
function(e) {
	var t = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.skinName = skins.LevelItem, t
			}
			return __extends(t, e), t.prototype.setData = function(e) {
				var t = e.lv,
					o = e.completion;
				(this.data.lv === t || this.data.completion === o) && (this.data = e, this.dataChanged())
			}, t.prototype.dataChanged = function() {
				var e = this.data,
					t = e.lv,
					o = e.completion,
					n = e.bLock;
				if (this.l_level.text = "" + t, n) this.currentState = "lock";
				else {
					this.currentState = "unlock";
					for (var r = 0; 3 > r; r++) o > r ? this["tg_star_" + (r + 1)].selected = !0 : this["tg_star_" + (r + 1)].selected = !1
				}
			}, t
		}(eui.ItemRenderer);
	e.LevelItemRenderer = t, __reflect(t.prototype, "ui.LevelItemRenderer")
}(ui || (ui = {}));
var ui;
!
function(e) {
	var t = function(e) {
			function t(t) {
				var o = e.call(this) || this;
				return o._frameEndTime = 0, o._frameStartTime = 0, o._deltaTime = 0, o._frameEvent = {}, o._isStop = !1, o._init(t), o.addEventListener(egret.Event.ADDED_TO_STAGE, o.__onAddToStage, o), o
			}
			return __extends(t, e), t.prototype._init = function(e) {
				this._curFrame = 0, this._interval = 1e3 / this._frameRate >> 0, this.frameRate = e.frameRate || 24, this.startFrame = e.startFrame || 0, this.endFrame = e.endFrame || 0, this.times = e.times || 1, this.isLoop = e.isLoop || !1, this.sourceTemp = e.sourceTemp || ""
			}, Object.defineProperty(t.prototype, "curFrame", {
				get: function() {
					return this._curFrame
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "frameRate", {
				get: function() {
					return this._frameRate
				},
				set: function(e) {
					null != e && this._frameRate != e && (this._frameRate = e, this._interval = 1e3 / e >> 0)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "startFrame", {
				get: function() {
					return this._startFrame
				},
				set: function(e) {
					null != e && this._startFrame != e && (this._startFrame = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "endFrame", {
				get: function() {
					return this._endFrame
				},
				set: function(e) {
					null != e && this._endFrame != e && (this._endFrame = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "times", {
				get: function() {
					return this._times
				},
				set: function(e) {
					null != e && this._times !== e && (this._times = e)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "isLoop", {
				get: function() {
					return this._isLoop
				},
				set: function(e) {
					this._isLoop !== e && (this._isLoop = e, e && (this.times = -1))
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "sourceTemp", {
				get: function() {
					return this.sourceTemp
				},
				set: function(e) {
					e && this._sourceTemp !== e && (this._sourceTemp = e, this._setTexture())
				},
				enumerable: !0,
				configurable: !0
			}), t.prototype.__onAddToStage = function(e) {
				this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.__onRemoveFromStage, this)
			}, t.prototype.__onRemoveFromStage = function(e) {
				this.stop()
			}, t.prototype._setTexture = function(e) {
				void 0 === e && (e = this._startFrame);
				var t = this,
					o = null,
					n = "";
				try {
					if (n = t._sourceTemp.replace("%f", e + ""), o = RES.getRes(n), !o || o.textureWidth <= 0 || o.textureHeight <= 0) throw new Error("帧动画的资源缺失: " + n);
					t.texture = o
				} catch (r) {
					egret.warn(r)
				}
			}, t.prototype.play = function(e) {
				var t = this;
				t.parent && (this._call = e, t._timeCount = 0, t._frameEndTime = Date.now(), t.addEventListener(egret.Event.ENTER_FRAME, t._play, t))
			}, t.prototype._play = function() {
				var e = this;
				if (e._frameStartTime = Date.now(), e._deltaTime = e._frameStartTime - e._frameEndTime, !(e._deltaTime < e._interval)) {
					if (e._times >= 0 && e._timeCount >= e._times) return void e.stop();
					e._frameEndTime = e._frameStartTime - e._deltaTime % e._interval;
					var t = e._curFrame + e._startFrame;
					t >= e._endFrame ? (e._curFrame = 0, e._timeCount++) : e._curFrame++, this._setTexture(t), this._frameEvent[t] && this._frameEvent[t]()
				}
			}, t.prototype.bindFrameEvent = function(e, t) {
				this._frameEvent[e] = t
			}, t.prototype.unbindFrameEvent = function(e) {
				this._frameEvent[e] = null
			}, t.prototype.goAndStop = function(e) {
				var t = this,
					o = t._sourceTemp.replace("%f", t._curFrame + "");
				t._curFrame = e, t.texture = RES.getRes(o), t.texture.textureWidth <= 0 || t.texture.textureHeight <= 0, t.stop()
			}, t.prototype.gotoAndPlay = function(e) {
				var t = this;
				t._curFrame = e, t.play()
			}, t.prototype.prevFrame = function() {
				var e = this;
				e._curFrame--, e.texture = RES.getRes(e._sourceTemp.replace("%f", e._curFrame + ""))
			}, t.prototype.stop = function() {
				var e = this;
				e._isStop || (e._isStop = !0, e.hasEventListener(egret.Event.ENTER_FRAME) && e.removeEventListener(egret.Event.ENTER_FRAME, e._play, e), this._call && e._call(), e._isStop = !1)
			}, t
		}(eui.Image);
	e.MovieClip = t, __reflect(t.prototype, "ui.MovieClip")
}(ui || (ui = {}));
var utils;
!
function(e) {
	function t(e, t) {
		for (var o = e.length, n = 0; o > n; n++) t[n] = JSON.parse(JSON.stringify(e[n]));
		for (var r = o; r < t.length; r++) t.pop();
		return t
	}
	function o(e, t, o) {
		if (!(t === o || 0 > t || t >= e.length || 0 > o || o > e.length)) {
			var n = e[t];
			e[t] = e[o], e[o] = n
		}
	}
	function n(e, t, o, n) {
		void 0 === o && (o = 0), void 0 === n && (n = e.length);
		for (var r = o; n > r; r++) e[r] = JSON.parse(JSON.stringify(t));
		return e
	}
	function r(e, t) {
		var o = e.length,
			n = t.length;
		if (0 >= o || 0 >= n) return console.warn("remove Error. rmvLen <= 0 || srcLen <= 0"), !1;
		var r = 0,
			i = 0,
			a = 0;
		for (i = 0; o > i; i++) {
			for (a = 0; n > a && t[a] !== e[i]; a++);
			a == n && (e[r++] = e[i])
		}
		return e.length = r, !0
	}
	function i(e) {
		return null != e && "object" == typeof e
	}
	function a(e, t) {
		if (void 0 === t && (t = !1), t) {
			var o = new egret.ColorMatrixFilter(s);
			e.filters = [o]
		} else e.filters = null
	}
	e.Copy = t, e.Swap = o, e.Fill = n, e.Remove = r, e.isObject = i;
	var s = [.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0];
	e.SetImageGray = a
}(utils || (utils = {}));
var ui;
!
function(e) {
	var t;
	!
	function(e) {
		e[e.NONE = 0] = "NONE", e[e.IN = 1] = "IN", e[e.IN_RUDE = 2] = "IN_RUDE", e[e.LEFT = 3] = "LEFT", e[e.RIGHT = 4] = "RIGHT", e[e.UP = 5] = "UP", e[e.DOWN = 6] = "DOWN"
	}(t = e.BOUNCE_EN || (e.BOUNCE_EN = {}));
	var o;
	!
	function(e) {
		e[e.NONE = 0] = "NONE", e[e.OUT = 1] = "OUT", e[e.IN_OUT = 2] = "IN_OUT", e[e.LEFT = 3] = "LEFT", e[e.RIGHT = 4] = "RIGHT", e[e.UP = 5] = "UP", e[e.DOWN = 6] = "DOWN"
	}(o = e.BOUNCE_EX || (e.BOUNCE_EX = {}));
	var n = (i = {}, i[t.NONE] = o.NONE, i[t.IN] = o.OUT, i[t.IN_RUDE] = o.IN_OUT, i[t.LEFT] = o.LEFT, i[t.RIGHT] = o.RIGHT, i[t.UP] = o.UP, i[t.DOWN] = o.DOWN, i),
		r = function() {
			function e() {}
			return e.show = function(t, o, n) {
				return void 0 === n && (n = {}), new Promise(function(r) {
					return e._showPanel(t, o, n, r)
				})
			}, e._showPanel = function(o, n, r, i) {
				var a = r.effectType,
					s = void 0 === a ? t.NONE : a,
					u = r.dark,
					h = void 0 === u ? !1 : u,
					c = r.popUpWidth,
					l = void 0 === c ? 0 : c,
					_ = r.popUpHeight,
					p = void 0 === _ ? 0 : _,
					d = r.isAlert,
					g = void 0 === d ? !0 : d;
				if (!o.contains(n)) {
					if (h) {
						if (!e.darkSprite) {
							var v = new egret.Sprite;
							v.graphics.clear(), v.graphics.beginFill(0, .3), v.graphics.drawRect(0, 0, o.width, o.height), v.graphics.endFill(), v.width = o.width, v.height = o.height, e.darkSprite = v
						}!o.contains(e.darkSprite) && o.addChild(e.darkSprite), e.darkSprite.touchEnabled = !1, egret.Tween.get(e.darkSprite).to({
							alpha: 1
						}, 150), e.darkSprite.visible = !0
					}!o.contains(n) && o.addChild(n), 0 == l && (l = n.width, p = n.height), n.alpha = 1, n.scaleX = 1, n.scaleY = 1, n.x = o.width / 2 - l / 2, n.y = o.height / 2 - p / 2;
					var m = o.width / 2 - l / 2,
						f = o.height / 2 - p / 2;
					switch (s) {
					case t.IN:
						n.alpha = 0, n.scaleX = .5, n.scaleY = .5, n.x = n.x + l / 4, n.y = n.y + p / 4, egret.Tween.get(n).to({
							alpha: 1,
							scaleX: 1,
							scaleY: 1,
							x: n.x - l / 4,
							y: n.y - p / 4
						}, 300, egret.Ease.backIn).call(i);
						break;
					case t.IN_RUDE:
						n.alpha = 0, n.scaleX = .5, n.scaleY = .5, n.x = n.x + l / 4, n.y = n.y + p / 4, egret.Tween.get(n).to({
							alpha: 1,
							scaleX: 1,
							scaleY: 1,
							x: n.x - l / 4,
							y: n.y - p / 4
						}, 600, egret.Ease.elasticOut).call(i);
						break;
					case t.LEFT:
						g ? (n.x = -l, egret.Tween.get(n).to({
							x: m,
							alpha: 1
						}, 500, egret.Ease.cubicOut).call(i)) : (n.x = -l, egret.Tween.get(n).to({
							x: 0
						}, 500, egret.Ease.cubicOut).call(i));
						break;
					case t.RIGHT:
						n.x = l, g ? egret.Tween.get(n).to({
							x: m
						}, 500, egret.Ease.cubicOut).call(i) : egret.Tween.get(n).to({
							x: 0
						}, 500, egret.Ease.cubicOut).call(i);
						break;
					case t.UP:
						n.y = -p, g ? egret.Tween.get(n).to({
							y: f
						}, 500, egret.Ease.cubicOut).call(i) : egret.Tween.get(n).to({
							y: 0
						}, 500, egret.Ease.cubicOut).call(i);
						break;
					case t.DOWN:
						g ? (n.y = o.height, egret.Tween.get(n).to({
							y: f
						}, 500, egret.Ease.cubicOut).call(i)) : (n.y = p, egret.Tween.get(n).to({
							y: 0
						}, 500, egret.Ease.cubicOut).call(i));
						break;
					case 0:
					default:
						i()
					}
				}
			}, e.close = function(t, o, n) {
				return void 0 === n && (n = {}), new Promise(function(r) {
					return e._closeView(t, o, n, r)
				})
			}, e._closeView = function(t, r, i, a) {
				var s = i.effectType,
					u = void 0 === s ? o.NONE : s,
					h = i.isReverse,
					c = void 0 === h ? !1 : h;
				c && (u = n[u]), e.darkSprite && egret.Tween.get(e.darkSprite).to({
					alpha: 0
				}, 300).call(function() {
					e.darkSprite && e.darkSprite.parent && e.darkSprite.parent.removeChild(e.darkSprite)
				}, this);
				var l = (r.x, r.y, r.scaleX, r.scaleY, function() {
					t.removeChild(r), a()
				});
				switch (u) {
				case o.OUT:
					egret.Tween.get(r).to({
						alpha: .5,
						scaleX: 1,
						scaleY: 1
					}, 300).call(l);
					break;
				case 2:
					egret.Tween.get(r).to({
						alpha: 0,
						scaleX: 0,
						scaleY: 0,
						x: r.x + r.width / 2,
						y: r.y + r.height / 2
					}, 300).call(l);
					break;
				case o.LEFT:
					egret.Tween.get(r).to({
						x: r.width
					}, 500, egret.Ease.cubicOut).call(l);
					break;
				case o.RIGHT:
					egret.Tween.get(r).to({
						x: -r.width
					}, 500, egret.Ease.cubicOut).call(l);
					break;
				case o.UP:
					egret.Tween.get(r).to({
						y: r.height
					}, 500, egret.Ease.cubicOut).call(l);
					break;
				case o.DOWN:
					egret.Tween.get(r).to({
						y: -r.height
					}, 500, egret.Ease.cubicOut).call(l);
					break;
				case 0:
				default:
					l()
				}
			}, e
		}();
	e.Am = r, __reflect(r.prototype, "ui.Am");
	var i
}(ui || (ui = {}));
var core;
!
function(e) {
	var t = df.RADIUS,
		o = 7,
		n = function() {
			function n() {
				this.left = 0, this.right = 0, this.top = 0, this.bottom = 0
			}
			return n.prototype.addStage = function(o) {
				this.left = 0, this.right = o.width || t * e.MAX_COL * 2, this.top = 0, this.bottom = o.height || t * e.MAX_ROW * 2, this.offX = o.x || 0, this.offY = o.y || 0
			}, n.prototype.add = function(e, t, o) {
				e.centerX = this.index2wX(t, o), e.centerY = this.index2wY(t, o), e.x = e.centerX, e.y = e.centerY
			}, n.prototype.getBoundary = function() {
				return {
					left: this.left,
					right: this.right,
					top: this.top,
					bottom: this.bottom
				}
			}, n.prototype.getIndexModel = function(e, t) {
				var o = this.index2wX(e, t),
					n = this.index2wY(e, t);
				return {
					centerX: o,
					centerY: n
				}
			}, n.prototype.index2wX = function(e, o) {
				return (e % 2 !== 0 ? t : 0) + o * t * 2 + t
			}, n.prototype.index2wY = function(e, n) {
				return e * (2 * t - o) + t
			}, n.prototype.g2wX = function(e) {
				return e - this.offX
			}, n.prototype.g2wY = function(e) {
				return e - this.offY
			}, n.prototype.w2gX = function(e) {
				return e + this.offX
			}, n.prototype.w2gY = function(e) {
				return e + this.offY
			}, n.prototype.getBubbleRow = function(e) {
				return Math.floor((e - this.top - t) / (2 * t - o))
			}, n.prototype.getBubbleCol = function(e, n) {
				return Math.floor((e - this.left - t - (2 * t - o)) / (2 * t))
			}, n.prototype.isHitSideWall = function(e) {
				var o = this.g2wX(e);
				return this.right - o <= t || o - this.left <= t
			}, n.prototype.getHitBubbleIndex = function(o) {
				for (var n = e.model.getCols(), r = e.model.getMaxRow(), i = o.radius ? o.radius : t, a = t, s = this.g2wX(o.x), u = this.g2wY(o.y), h = 0, c = 0, l = 0, _ = 0, p = Math.pow(i + a, 2), d = r; d >= -1; d--) {
					c = this.index2wY(d, 0), l = Math.pow(u - c, 2), n = e.model.getCols(d);
					for (var g = 0; n > g; g++) if (e.model.getNodeVal(d, g) !== e.NodeType.NONE && (h = this.index2wX(d, g), _ = Math.pow(s - h, 2), p >= l + _)) return {
						row: d,
						col: g
					}
				}
				return null
			}, n.prototype.getFixedBubbleIndex = function(t, o) {
				var n = null,
					r = e.model.getNeighbors(o.row, o.col, e.EFilterType.EMPTY);
				if (0 == r.length) return n;
				for (var i = this.g2wX(t.x), a = this.g2wY(t.y), s = 0, u = 0, h = 0, c = 0, l = 1e4, _ = 0; _ < r.length; _++) s = this.index2wX(r[_].row, r[_].col), u = this.index2wY(r[_].row, 0), h = Math.pow(a - u, 2), c = Math.pow(i - s, 2), h + c > l || (l = h + c, n = r[_]);
				return n
			}, n.prototype.checkGuidLineHit = function(o) {
				var n = e.model.getMaxRow();
				return o.centerY > this.index2wY(n, 0) + t ? !1 : null !== this.getHitBubbleIndex(o)
			}, n
		}();
	__reflect(n.prototype, "World"), e.word = new n
}(core || (core = {}));
var dt;
!
function(e) {
	var t = "lv_map_json",
		o = "user",
		n = "game",
		r = (a = {}, a[o] = "_userDt", a[n] = "_gameDt", a),
		i = function() {
			function e() {
				this._gameModel = df.EGameModel.NONE, this._gameStatus = df.EGameStatus.FREE
			}
			return e.prototype.init = function() {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						switch (e.label) {
						case 0:
							return this._initUserData(), this._initGameDt(), [4, this.loadLVMap()];
						case 1:
							return e.sent(), [2]
						}
					})
				})
			}, e.prototype.loadLVMap = function(e) {
				return void 0 === e && (e = t), __awaiter(this, void 0, void 0, function() {
					var t;
					return __generator(this, function(o) {
						switch (o.label) {
						case 0:
							return t = this, [4, RES.getResAsync(e)];
						case 1:
							return t._lvMap = o.sent(), [2]
						}
					})
				})
			}, e.prototype._readLocalDt = function(e) {
				var t = egret.localStorage.getItem(e);
				t || (t = null);
				var o = JSON.parse(t);
				return o = o ? JSON.parse(t) : {}
			}, e.prototype._saveLocalDt = function(e) {
				egret.localStorage.setItem(e, JSON.stringify(this[r[e]]))
			}, e.prototype._initUserData = function() {
				var e = this._readLocalDt(o);
				e.coin = e.coin || df.COIN, e.name = e.name || df.NAME, e.id = e.id || df.ID, e.onMusic = void 0 != e.onMusic ? e.onMusic : !1, e.onVoice = void 0 != e.onVoice ? e.onVoice : !1, e.toolCount = e.toolCount || {
					hummer: 1,
					color: 1,
					bomb: 1,
					guid: 1
				}, this._userDt = e, this._saveLocalDt(o)
			}, e.prototype._initGameDt = function() {
				var e = this._readLocalDt(n);
				e.completion = e.completion || [0], e.lvMaxScore = e.lvMaxScore || [], e.freeMaxScore = e.freeMaxScore || 0, this._gameDt = e, this._saveLocalDt(n)
			}, e.prototype.getOnMusic = function() {
				return this._userDt.onMusic
			}, e.prototype.setOnMusic = function(e) {
				this._userDt.onMusic = e, this._saveLocalDt(o)
			}, e.prototype.getOnVoice = function() {
				return this._userDt.onVoice
			}, e.prototype.setOnVoice = function(e) {
				this._userDt.onVoice = e, this._saveLocalDt(o)
			}, e.prototype.getCurLv = function() {
				return this._curLv
			}, e.prototype.setCurLv = function(e) {
				this._curLv = Math.min(Math.max(e, 1), this._gameDt.completion.length), this._curLv = Math.min(Math.max(e, 1), this._lvMap.length - 1), this._gameDt.completion[this._curLv - 1] || (this._gameDt.completion[this._curLv - 1] = 0), this._gameDt.lvMaxScore[this._curLv - 1] || (this._gameDt.lvMaxScore[this._curLv - 1] = 0)
			}, e.prototype.getLvMap = function(e) {
				return this._lvMap[e] || null
			}, e.prototype.getLvCount = function() {
				return this._lvMap.length - 1
			}, e.prototype.getLvTime = function(e) {
				return void 0 === e && (e = this._curLv), this._lvMap[e].time || df.GAME_TIME
			}, e.prototype.getGameModel = function() {
				return this._gameModel
			}, e.prototype.setGameModel = function(e) {
				this._gameModel = e
			}, e.prototype.getGameStatus = function() {
				return this._gameStatus
			}, e.prototype.setGameStatus = function(e) {
				this._gameStatus = e
			}, e.prototype.getCompletion = function() {
				return this._gameDt.completion || []
			}, e.prototype.getLvCompletion = function(e) {
				return void 0 === e && (e = this._curLv), this._gameDt.completion[e - 1] || 0
			}, e.prototype.updateLvCompletion = function(e) {
				var t = this._curLv - 1,
					o = this._gameDt,
					r = o.completion[t];
				return void 0 != r && (o.completion[t] = Math.min(Math.max(e, r), 3)), this._gameDt.completion[t] && t + 1 >= this._gameDt.completion.length && (o.completion[t + 1] = 0), this._saveLocalDt(n), o.completion[t] - r
			}, e.prototype.getFreeMaxScore = function() {
				return this._gameDt.freeMaxScore || 0
			}, e.prototype.updateMaxScore = function(e) {
				this._gameDt.freeMaxScore = Math.max(e, 0), this._saveLocalDt(n)
			}, e.prototype.getLvMaxScore = function(e) {
				return void 0 === e && (e = this._curLv), this._gameDt.lvMaxScore[e - 1] || 0
			}, e.prototype.updateLvMaxScore = function(e) {
				var t = this._curLv - 1,
					o = this._gameDt;
				void 0 != o.lvMaxScore[t] && (o.lvMaxScore[t] = Math.max(e, o.lvMaxScore[t])), this._saveLocalDt(n)
			}, e.prototype.getUserInfo = function() {
				var e = this._userDt,
					t = e.name,
					o = e.id;
				return {
					name: t,
					id: o
				}
			}, e.prototype.getCoin = function() {
				return this._userDt.coin
			}, e.prototype.updateCoin = function(e) {
				var t = this._userDt.coin;
				this._userDt.coin = Math.max(t + e, 0), this._saveLocalDt(o)
			}, e.prototype.getToolCount = function() {
				var e = this._userDt.toolCount;
				return e
			}, e.prototype.updateToolCount = function(e, t) {
				var n = this._userDt.toolCount[e];
				null != n && (this._userDt.toolCount[e] = Math.max(n + t, 0), this._saveLocalDt(o))
			}, e
		}();
	__reflect(i.prototype, "DataMrg"), e.dataMrg = new i;
	var a
}(dt || (dt = {}));
var view;
!
function(e) {
	var t = ["result_wenzikubile_png", "result_wenzishuaidaile_png", "result_wenzizhenbang_png", "result_wenzizhenlihai_png"],
		o = function() {
			function e(e) {
				this._res = e, this._res.removeChildren(), this._comBoCount = 0, this._initCombo(), this._initGood()
			}
			return e.prototype._initCombo = function() {
				this._comboPool = [], this._comboPool.push(this._createComEffect()), this._comboPool.push(this._createComEffect())
			}, e.prototype._initGood = function() {
				this._goodPool = [];
				for (var e = 0; e < t.length; e++) this._goodPool.push(new eui.Image(t[e]))
			}, e.prototype.showCombo = function(e, t) {
				if (3 > e) return void(this._comBoCount = Math.max(0, this._comBoCount - 1));
				if (this._comBoCount++, this._showGood(), this._comboPool.length) {
					var o = this,
						n = o._getComboEffect();
					n.bl_combo.text = "" + e, n.y = t.y - 2 * df.RADIUS, n.x = t.x, o._res.addChild(n), egret.Tween.get(n).to({
						alpha: 1,
						scaleX: 1,
						scaleY: 1
					}, 150, egret.Ease.bounceIn).wait(1e3).to({
						alpha: .2,
						scaleX: 0,
						scaleY: 0
					}, 800).call(function() {
						egret.Tween.removeTweens(n), o._res.removeChild(n), n.alpha = 1, o._comboPool.unshift(n)
					})
				}
			}, e.prototype._showGood = function() {
				var e = this;
				if (!(e._comBoCount < 3)) {
					var t = e._comBoCount / 3 >> 0,
						o = e._res.height - 100,
						n = e._goodPool[t],
						r = Math.floor(Math.random() * o) + 50;
					n.parent || (e._comBoCount >= 9 && (e._comBoCount = 0), e._comBoCount++, n.y = r, n.x = this._res.width, e._res.addChild(n), egret.Tween.get(n).to({
						x: -n.width
					}, 2e3).call(function() {
						egret.Tween.removeTweens(n), e._res.removeChild(n)
					}))
				}
			}, e.prototype._getComboEffect = function() {
				return this._comboPool.length ? this._comboPool.pop() : this._createComEffect()
			}, e.prototype._createComEffect = function() {
				var e = new eui.Component;
				return e.skinName = skins.ComboEffectItem, e.currentState = (this._res.numElements + this._comboPool.length) % 2 ? "purple" : "blue", e.anchorOffsetX = 85, e.anchorOffsetY = 44, e
			}, e.prototype.reset = function() {
				this._comBoCount = 0;
				for (var e = 0; e < this._res.numElements; e++) egret.Tween.removeTweens(this._res.getElementAt(e));
				this._res.removeChildren()
			}, e
		}();
	e.ComboEffectHandler = o, __reflect(o.prototype, "view.ComboEffectHandler")
}(view || (view = {}));
var Main = function(e) {
		function t() {
			return null !== e && e.apply(this, arguments) || this
		}
		return __extends(t, e), t.prototype.createChildren = function() {
			e.prototype.createChildren.call(this), egret.lifecycle.addLifecycleListener(function(e) {}), egret.lifecycle.onPause = function() {
				egret.ticker.pause()
			}, egret.lifecycle.onResume = function() {
				egret.ticker.resume()
			};
			var t = new AssetAdapter;
			egret.registerImplementation("eui.IAssetAdapter", t), egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter), this.runGame()["catch"](function(e) {
				console.log(e)
			})
		}, t.prototype.runGame = function() {
			return __awaiter(this, void 0, void 0, function() {
				return __generator(this, function(e) {
					switch (e.label) {
					case 0:
						return [4, this.loadResource()];
					case 1:
						return e.sent(), this.createGameScene(), [2]
					}
				})
			})
		}, t.prototype.loadResource = function() {
			return __awaiter(this, void 0, void 0, function() {
				var e;
				return __generator(this, function(t) {
					switch (t.label) {
					case 0:
						return t.trys.push([0, 6, , 7]), [4, RES.loadConfig("resource/default.res.json", "resource/")];
					case 1:
						return t.sent(), [4, RES.loadGroup("preload", 0)];
					case 2:
						return t.sent(), this._loadingView = new LoadingUI, this.addChild(this._loadingView), [4, this.loadTheme()];
					case 3:
						return t.sent(), [4, RES.loadGroup("game", 1, this._loadingView)];
					case 4:
						return t.sent(), [4, dt.dataMrg.init()];
					case 5:
						return t.sent(), [3, 7];
					case 6:
						return e = t.sent(), console.error(e), [3, 7];
					case 7:
						return [2]
					}
				})
			})
		}, t.prototype.loadTheme = function() {
			var e = this;
			return new Promise(function(t, o) {
				var n = new eui.Theme("resource/default.thm.json", e.stage);
				n.once(eui.UIEvent.COMPLETE, t, e)
			})
		}, t.prototype.createGameScene = function() {
			view.viewMrg.init(this), view.viewMrg.register(new view.MenuPage), view.viewMrg.register(new view.GameModelPanel), view.viewMrg.register(new view.ShopPage), view.viewMrg.register(new view.HelpPage), view.viewMrg.register(new view.LevelPage), view.viewMrg.register(new view.PausePanel), view.viewMrg.register(new view.GameView), view.viewMrg.register(new view.ResultPanel), view.viewMrg.register(new view.MsgPanel), view.viewMrg.showPage("MenuPage"), this.removeChild(this._loadingView)
		}, t
	}(eui.UILayer);
__reflect(Main.prototype, "Main");
var view;
!
function(e) {
	e.SHOOT_START_POSITION = {
		x: 320,
		y: 985,
		rotation: 360
	}, e.NEXT_POSITION = {
		x: 205,
		y: 1010,
		rotation: -360
	};
	var t = function(t) {
			function o() {
				var o = t.call(this) || this;
				return o.viewName = "GameView", o.viewType = e.EViewType.PAGE, o._lvData = null, o._curBubble = null, o._nextBubble = null, o._bubbleMap = [], o._droppingBubbles = [], o.isShooting = !1, o._timeCount = 0, o._shakeCount = 0, o.skinName = skins.GamePage, o
			}
			return __extends(o, t), o.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this), e.gameHandler.bindRes(this), this._initMc(), this.setChildIndex(this.btn_change, 200), core.word.addStage(this.g_bubble)
			}, o.prototype._initMc = function() {
				this._mcBomb = new ui.MovieClip({
					sourceTemp: "mc_bomb_%f_png",
					startFrame: 0,
					endFrame: 6,
					frameRate: 16
				}), this._mcBomb.anchorOffsetX = this._mcBomb.width / 2, this._mcBomb.anchorOffsetY = this._mcBomb.height / 2, this._mcHummer = new ui.MovieClip({
					sourceTemp: "mc_hummer_%f_png",
					startFrame: 0,
					endFrame: 5,
					frameRate: 12
				}), this._mcHummer.anchorOffsetX = this._mcHummer.width / 2, this._mcHummer.anchorOffsetY = this._mcHummer.height / 2
			}, o.prototype._initTool = function() {
				var e = dt.dataMrg.getToolCount(),
					t = e.hummer,
					o = e.guid,
					n = e.bomb,
					r = e.color;
				this._setToolValue(this.tool_hummer, t), this._setToolValue(this.tool_color, r), this._setToolValue(this.tool_bomb, n), this._setToolValue(this.tool_guid, o)
			}, o.prototype._setToolValue = function(e, t) {
				e.bl_num.text = "" + t, e.touchEnabled = t > 0, utils.SetImageGray(e.icon_tool, 0 >= t)
			}, o.prototype.useTool = function(e) {
				var t = this;
				if (!t._curBubble) return !1;
				switch (e) {
				case t.tool_hummer:
					t._curBubble.setValue(df.BubbleType.HUMMER);
					break;
				case t.tool_color:
					t._curBubble.setValue(df.BubbleType.COLOR);
					break;
				case t.tool_bomb:
					t._curBubble.setValue(df.BubbleType.BOMB2);
					break;
				case t.tool_guid:
				}
				return t.icon_arrow.setValue(t._curBubble.value), t._setToolValue(e, Number(e.bl_num.text) - 1), dt.dataMrg.updateToolCount(e.currentState, -1), !0
			}, o.prototype._setLvData = function(e) {
				this._lvData = dt.dataMrg.getLvMap(e);
				var t = JSON.parse(JSON.stringify(this._lvData.map));
				null !== this._lvData ? (t[-1] = df.B1, core.model.setMap(t, this._lvData.types, this._lvData.next), this._timeCount = dt.dataMrg.getLvTime(e), this._updateTimeBoard(), this._updateScoreBoard(), this._updateBubbleGroup()) : console.warn("不能存在关卡【" + e + "】的游戏数据！")
			}, o.prototype.onPreShow = function() {
				var e = this;
				e._reset(), e.icon_ready.parent && e.icon_ready.parent.removeChild(e.icon_ready), e.gray_mask.parent || e.addChild(e.gray_mask), e.btn_begin.parent || e.addChild(e.btn_begin), dt.dataMrg.getGameModel() == df.EGameModel.LV && e._setLvData(dt.dataMrg.getCurLv()), e.l_coin.text = "" + dt.dataMrg.getCoin(), e._initTool()
			}, o.prototype.onPostClose = function() {
				this._reset(), this.hasEventListener(egret.Event.ENTER_FRAME) && this.removeEventListener(egret.Event.ENTER_FRAME, this._amDrop, this)
			}, o.prototype._reset = function() {
				var e = this;
				e.g_bubble.removeChildren(), e._curBubble && e._curBubble.parent && e._curBubble.parent.removeChild(e._curBubble), e._nextBubble && e._nextBubble.parent && e._nextBubble.parent.removeChild(e._nextBubble), e._curBubble = null, e._nextBubble = null, e._bubbleMap.length = 0, e._droppingBubbles.length = 0, e._lvData = null
			}, o.prototype._updateScoreBoard = function() {
				this.score_board.setData(this._lvData)
			}, o.prototype._updateTimeBoard = function() {
				var e = Math.max(this._timeCount, 0);
				this.time_board.bl_time.text = "" + e
			}, o.prototype.gameStart = function() {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(t) {
						switch (t.label) {
						case 0:
							return dt.dataMrg.getGameStatus() === df.EGameStatus.PLAYING ? [2] : (this.btn_begin.parent && this.btn_begin.parent.removeChild(this.btn_begin), [4, this.amReadyGo()]);
						case 1:
							return t.sent(), this.gray_mask.parent && this.gray_mask.parent.removeChild(this.gray_mask), this._createNextBubble(), [4, this.amLoad()];
						case 2:
							return t.sent(), dt.dataMrg.setGameStatus(df.EGameStatus.PLAYING), e.timerHandler.star(), [2]
						}
					})
				})
			}, o.prototype.onTimerEvent = function() {
				this._timeCount--, this._updateTimeBoard()
			}, o.prototype.onTimeEnd = function() {
				this._timeCount = 0, this.hasEventListener(egret.Event.ENTER_FRAME) && this.removeEventListener(egret.Event.ENTER_FRAME, this._amShooting, this), this.timeOutResult()
			}, o.prototype._updateBubbleGroup = function() {
				for (var e = core.model.getRows(), t = core.model.getCols(), o = null, n = -1; e > n; n++) {
					t = core.model.getCols(n);
					for (var r = 0; t > r; r++) o = ui.bubblePool.createBubble(core.model.getNodeVal(n, r)), o && (this._bubbleMap[n] || (this._bubbleMap[n] = []), this._bubbleMap[n][r] = o, this.g_bubble.addChild(o), core.word.add(o, n, r))
				}
			}, o.prototype._createNextBubble = function() {
				if (this._nextBubble) console.error("next bubble没有清空！");
				else {
					var t = core.model.getNextVal();
					this._nextBubble = ui.bubblePool.createBubble(t), this._nextBubble.x = e.NEXT_POSITION.x, this._nextBubble.y = e.NEXT_POSITION.y, this.addChildAt(this._nextBubble, 11)
				}
			}, o.prototype._addBubble = function(e, t, o) {
				o && (this._bubbleMap[e] || (this._bubbleMap[e] = []), this._bubbleMap[e][t] = o, this.g_bubble.addChild(o), core.word.add(o, e, t), core.model.addNode(e, t, o.value))
			}, o.prototype.amReadyGo = function() {
				var e = this;
				return new Promise(function(t) {
					e.icon_ready.parent || e.addChild(e.icon_ready);
					for (var o = egret.Tween.get(e.icon_ready), n = function(t) {
							o.call(function() {
								e.icon_ready.source = "readygo_" + t + "_png", e.icon_ready.visible = !0
							}).set({
								scaleX: 2,
								scaleY: 2
							}).to({
								scaleX: 1,
								scaleY: 1
							}, 500, egret.Ease.quartIn).wait(150).call(function() {
								e.icon_ready.visible = !1
							}).wait(150)
						}, r = 3; r >= 0; r--) n(r);
					o.call(function() {
						egret.Tween.removeTweens(e.icon_ready), e.icon_ready.parent && e.icon_ready.parent.removeChild(e.icon_ready), t()
					})
				})
			}, o.prototype.amBallRoll = function(t) {
				var o = this,
					n = t ? e.SHOOT_START_POSITION : e.NEXT_POSITION,
					r = t ? o._nextBubble : o._curBubble;
				return r ? new Promise(function(e) {
					egret.Tween.get(r).to({
						x: n.x,
						y: n.y,
						rotation: n.rotation
					}, 250).wait(200).call(e)
				}) : Promise.resolve()
			}, o.prototype.amLoad = function() {
				var e = this;
				return this._curBubble && (console.warn("当前存在泡泡！"), this._curBubble = null), e.amBallRoll(!0).then(function() {
					e._curBubble = e._nextBubble, e._nextBubble = null, e._createNextBubble(), e.icon_arrow.setValue(e._curBubble.value), e.isShooting = !1
				})
			}, o.prototype.amSwitch = function() {
				var e = this,
					t = this;
				return t.isShooting ? void 0 : (t.isShooting = !0, Promise.all([t.amBallRoll(!0), t.amBallRoll(!1)]).then(function() {
					var o = t._curBubble;
					t._curBubble = t._nextBubble, t._nextBubble = o, t.icon_arrow.setValue(t._curBubble.value), t.isShooting = !1, t.swapChildren(e._curBubble, e._nextBubble), console.log("【" + df.BubbleName[e._nextBubble.value] + "】 <=> 【" + df.BubbleName[e._curBubble.value] + "】")
				}))
			}, o.prototype.startShooting = function(e) {
				this.isShooting = !0, this._curBubble.setAngle(e), this.addEventListener(egret.Event.ENTER_FRAME, this._amShooting, this)
			}, o.prototype._amShooting = function() {
				var e = this;
				e._curBubble.x += e._curBubble.speedX, e._curBubble.y += e._curBubble.speedY, e._curBubble.rotation += e._curBubble._rotation;
				e._curBubble.x;
				core.word.isHitSideWall(e._curBubble.x) && (e._curBubble.speedX = -e._curBubble.speedX, e._curBubble.x < e.g_bubble.x + df.RADIUS ? e._curBubble.x = e.g_bubble.x + df.RADIUS : this._curBubble.x > this.g_bubble.x + e.g_bubble.width - df.RADIUS && (e._curBubble.x = e.g_bubble.x + e.g_bubble.width - df.RADIUS)), this._hitCheck()
			}, o.prototype._hitCheck = function() {
				var e = core.word.getHitBubbleIndex(this._curBubble);
				if (e) {
					if (this.removeEventListener(egret.Event.ENTER_FRAME, this._amShooting, this), this._curBubble.value & df.TOOL_MASK) switch (this._curBubble.value) {
					case df.BubbleType.HUMMER:
						this._hummerHit(e);
						break;
					case df.BubbleType.BOMB2:
						this._bombHit(e);
						break;
					case df.BubbleType.COLOR:
						this._colorHit(e)
					} else this._bubbleHit(e);
					this._resultCheck()
				}
			}, o.prototype._hummerHit = function(e) {
				var t = this,
					o = this,
					n = o._curBubble,
					r = o._mcHummer,
					i = o._bubbleMap;
				if (e.row < 0) return core.word.add(n, e.row, e.col), n.visible = !1, void this._startDrop([e], !1);
				var a = core.word.w2gX(core.word.index2wX(e.row, e.col)),
					s = core.word.w2gY(core.word.index2wY(e.row, e.col)),
					u = core.model.getNoConnectNode([e]),
					h = [e].concat(u);
				n.x = a, n.y = s, r.x = a, r.y = s, core.model.removeNodes(h);
				var c = function() {
						ui.bubblePool.recycleBubble(n)
					},
					l = function() {
						e.row < 0 || (i[e.row][e.col].visible = !1, t._startDrop(h, !1))
					},
					_ = function() {
						o.removeChild(r), r.unbindFrameEvent(1), r.unbindFrameEvent(3)
					};
				o.addChild(r), r.bindFrameEvent(1, c), r.bindFrameEvent(3, l), r.play(_)
			}, o.prototype._bombHit = function(e) {
				var t = this,
					o = this,
					n = o._curBubble,
					r = o._mcBomb,
					i = o._bubbleMap,
					a = core.word.getFixedBubbleIndex(n, e),
					s = a.row,
					u = a.col,
					h = core.word.w2gX(core.word.index2wX(s, u)),
					c = core.word.w2gY(core.word.index2wY(s, u)),
					l = core.model.getNeighbors(s, u, core.EFilterType.FILLED),
					_ = core.model.getNoConnectNode(l),
					p = l.concat(_);
				core.model.removeNodes(p), n.x = h, n.y = c, r.x = h, r.y = c;
				var d = function() {
						ui.bubblePool.recycleBubble(n)
					},
					g = function() {
						for (var e = 0; e < l.length; e++) {
							var o = l[e],
								n = o.row,
								r = o.col;
							i[n][r].visible = !1
						}
						t._startDrop(p, !1)
					},
					v = function() {
						o.removeChild(r), r.unbindFrameEvent(2), r.unbindFrameEvent(5)
					};
				o.addChild(r), r.bindFrameEvent(2, d), r.bindFrameEvent(3, g), r.play(v)
			}, o.prototype._colorHit = function(t) {
				var o = this,
					n = o._curBubble,
					r = core.word.getFixedBubbleIndex(n, t),
					i = r.row,
					a = r.col;
				this._addBubble(i, a, this._curBubble);
				var s = core.model.getNeighbors(i, a, core.EFilterType.FILLED),
					u = core.model.getTypes(s),
					h = [{
						row: i,
						col: a
					}],
					c = core.model.getCombos(i, a, u);
				for (var l in c) c.hasOwnProperty(l) && c[l].length >= 3 && (c[l].shift(), Array.prototype.push.apply(h, c[l]));
				if (e.gameHandler.showCombo(h.length, new egret.Point(this._curBubble.x, this._curBubble.y)), h.length >= 3) {
					var _ = core.model.getNoConnectNode(h),
						p = h.concat(_);
					core.model.removeNodes(p), o.score_board.onProgress(o.countCombos(h.length, p.length)), this._startDrop(p)
				} else {
					var d = core.model.getNodeVal(t.row, t.col);
					d == df.BubbleType.ALPHA && (d = core.model.createNode()), n.setValue(d), core.model.addNode(i, a, d)
				}
			}, o.prototype._bubbleHit = function(t) {
				var o = this,
					n = o._curBubble,
					r = core.word.getFixedBubbleIndex(n, t),
					i = r.row,
					a = r.col;
				this._addBubble(i, a, this._curBubble);
				var s = core.model.getCombos(i, a)[this._curBubble.value];
				if (e.gameHandler.showCombo(s.length, new egret.Point(this._curBubble.x, this._curBubble.y)), !(s.length < 3)) {
					var u = core.model.getNoConnectNode(s),
						h = s.concat(u);
					core.model.removeNodes(h), o.score_board.onProgress(o.countCombos(s.length, h.length)), this._startDrop(h)
				}
			}, o.prototype._resultCheck = function() {
				return this.$checkWin() ? void this.winResult() : this.$checkLose() ? void this.loseResult() : (this._curBubble = null, void this.amLoad())
			}, o.prototype._startDrop = function(e, t) {
				void 0 === t && (t = !0);
				for (var o = null, n = null, r = e.length, i = 0; r > i; i++) n = e[i], o = this._bubbleMap[n.row][n.col], o.speedX = (i % 2 ? -1 : 1) * (df.SPEED_X + Math.random() * df.SPEED_X), o.speedY = t ? -df.SPEED_Y + Math.random() * df.SPEED_X / 2 : 0, o.g = df.G + Math.random(), this._bubbleMap[n.row][n.col] = null, this._droppingBubbles.push(o), this.g_bubble.addChild(o);
				t ? this.addEventListener(egret.Event.ENTER_FRAME, this._amShake, this) : this.addEventListener(egret.Event.ENTER_FRAME, this._amDrop, this)
			}, o.prototype._amShake = function() {
				var e, t = this,
					o = t._droppingBubbles;
				if (t._shakeCount <= df.SHAKE_COUNT) {
					t._shakeCount += 1;
					for (var n = 0; n < o.length; n++) e = o[n], e.x += Math.random() * df.SHAKE_SPEED - df.SHAKE_SPEED / 2
				} else t.removeEventListener(egret.Event.ENTER_FRAME, t._amShake, t), t._shakeCount = 0, t.addEventListener(egret.Event.ENTER_FRAME, this._amDrop, this)
			}, o.prototype._amDrop = function() {
				for (var e = 0, t = this, o = t._droppingBubbles, n = null, r = 0; r < o.length; r++) n = o[r], n.x = n.x + n.speedX, n.y = n.y + n.speedY, n.speedY += n.g, core.word.bottom - n.y <= df.RADIUS && (n.y = core.word.bottom - df.RADIUS, n.speedY = -df.U * n.speedY), (t.g_bubble.x - n.x > df.RADIUS || n.x - (t.g_bubble.x + t.g_bubble.width) > df.RADIUS) && e++;
				if (o.length === e) {
					t.removeEventListener(egret.Event.ENTER_FRAME, t._amDrop, t);
					for (var r = 0; r < o.length; r++) ui.bubblePool.recycleBubble(o[r]);
					o.length = 0
				}
			}, o.prototype._amCoinBonus = function() {}, o.prototype.gameEnd = function(t) {
				void 0 === t && (t = !1), e.timerHandler.stop(), e.gameHandler.gameEnd();
				var o = this;
				if (!t) {
					var n = dt.dataMrg.updateLvCompletion(o.score_board.getUserCompletion());
					dt.dataMrg.updateCoin(o.lvModelCoinBonus(n))
				}
				dt.dataMrg.updateLvMaxScore(o.score_board.getUserScore()), 
				e.viewMrg.showPanel("ResultPanel", {effectType: ui.BOUNCE_EN.IN}, 
				[o.score_board.getUserScore(), o.score_board.getUserCompletion(), t]),
				//params 分数 关卡  ？
				console.log(o.score_board.getUserScore(),o.score_board.getUserCompletion());
				window.bubbleObj.passGame(o.score_board.getUserScore(),o.score_board.getUserCompletion());
			}, o.prototype.$checkWin = function() {
				return this.score_board.getUserScore() === this._lvData.maxScore ? !0 : core.model.isEmpty()
			}, o.prototype.winResult = function() {
				this.gameEnd()
			}, o.prototype.$checkLose = function() {
				return core.model.isOverflow()
			}, o.prototype.loseResult = function() {
				this.gameEnd(!0)
			}, o.prototype.timeOutResult = function() {
				this.gameEnd()
			}, o.prototype.countCombos = function(e, t) {
				for (var o = df.COMBOS_BONUS[0], n = 0; n < df.COMBO_LV.length && !(e < df.COMBO_LV[n]); n++) o = df.COMBOS_BONUS[n];
				return e * o + (t - e) * o / 2
			}, o.prototype.lvModelCoinBonus = function(e) {
				return e * df.COMPLETION_CHANGE_COIN
			}, o.prototype.freeModelCoinBonus = function(e) {
				return Math.floor(e / df.SCORE_CHANGE_COIN)
			}, o
		}(eui.Component);
	e.GameView = t, __reflect(t.prototype, "view.GameView", ["view.IView", "IViewModel", "IViewHandle"])
}(view || (view = {}));
var view;
!
function(e) {
	var t = 30,
		o = "point_png",
		n = 5,
		r = function() {
			function e(e) {
				this._group = e, this._pool = [], this.left = e.x + df.RADIUS, this.top = e.y + df.RADIUS, this.right = e.x + e.width - df.RADIUS, this.bottom = e.y + e.height - df.RADIUS, this._extendPool()
			}
			return e.prototype.show = function(e, t, o, n, r) {
				var i = (t - n) / (e - o),
					a = t - i * e;
				this._k = i, this._b = a, this._angle = r, this._update()
			}, e.prototype.hide = function() {
				for (; this._group.numChildren;) this._push(this._group.removeChildAt(0))
			}, e.prototype._update = function() {
				for (var e = this._getPoints().reverse(), t = null, o = 0; e.length;) {
					var n = e.pop(),
						r = n.x,
						i = n.y;
					if (core.word.checkGuidLineHit({
						x: r,
						y: i
					})) break;
					o < this._group.numChildren ? t = this._group.getChildAt(o) : (t = this._pop(), this._group.addChild(t)), t.x = r - this._group.x, t.y = i - this._group.y, o++
				}
				for (; o < this._group.numChildren;) this._push(this._group.getChildAt(o))
			}, e.prototype._getPoints = function(e) {
				void 0 === e && (e = 3);
				for (var o = this._k, n = this._b, r = this._angle, i = 0, a = Math.round(t * Math.cos(r * Math.PI / 180)), s = this.bottom, u = (s - n) / o + .1, h = 0, c = [], l = this._getHitPoint(u, s, e), _ = 0; _ < l.length - 1; _++) {
					c.push(l[_]), u = l[_].x, s = l[_].y, h = Math.floor(Math.abs((l[_ + 1].y - l[_].y) / a)), i = Math.round((l[_ + 1].y - l[_].y) / (h + 1));
					for (var p = 0; h > p; p++) s += i, u = (s - n) / o, c.push({
						x: u,
						y: s
					});
					o = -o, n = l[_ + 1].y - o * l[_ + 1].x
				}
				return c
			}, e.prototype._getHitPoint = function(e, t, o) {
				void 0 === o && (o = 3);
				for (var n = this._k, r = this._b, i = this.left, a = this.top, s = this.right, u = this.bottom, h = [{
					x: e,
					y: t
				}], c = 0, l = 0, _ = 0, p = !1, d = !1; o > _ && (p || e == i || (c = i, l = n * c + r, l >= a && u >= l && (p = !0)), p || e == s || (c = s, l = n * c + r, l >= a && u >= l && (p = !0)), p || t == a || (l = a, c = (l - r) / n, c >= i && s >= c && (p = !0, d = !0)), p || t == u || (l = u, c = (l - r) / n, c >= i && s >= c && (p = !0, d = !0)), n = -n, r = l - n * c, e = c, t = l, h.push({
					x: e,
					y: t
				}), p = !1, !d);) _++;
				return h
			}, e.prototype._pop = function() {
				return this._pool.length <= 0 && this._extendPool(), this._pool.pop()
			}, e.prototype._extendPool = function() {
				for (var e = 0; 8 > e; e++) {
					var t = new eui.Image(o);
					t.anchorOffsetX = n, t.anchorOffsetY = n, this._pool.push(t)
				}
			}, e.prototype._push = function(e) {
				e.parent && e.parent.removeChild(e), this._pool.push(e)
			}, e.prototype._reducePool = function() {
				this._pool.length = Math.floor(this._pool.length / 2)
			}, e
		}();
	e.GuidLineHandler = r, __reflect(r.prototype, "view.GuidLineHandler")
}(view || (view = {}));
var view;
!
function(e) {
	var t = 15,
		o = 600,
		n = 100,
		r = function(e) {
			function r() {
				return e.call(this) || this
			}
			return __extends(r, e), r.prototype.createChildren = function() {
				this.pg_thumb.mask = this.pg_thumb_mask
			}, r.prototype._setScoreLv = function(e) {
				var t = this,
					o = t.pg_thumb.width;
				t._scoreLv = e || df.SCORE_LV, t.pg_star_1.x = t._scoreLv[0] / 100 * o, t.pg_star_2.x = t._scoreLv[1] / 100 * o, t.pg_star_3.x = t._scoreLv[2] / 100 * o
			}, r.prototype.getUserScore = function() {
				return this._userScore
			}, r.prototype.getUserCompletion = function() {
				return this._completion
			}, r.prototype.setData = function(e) {
				var t = this;
				t.reset(), t._lv = dt.dataMrg.getCurLv(), t._maxScore = e.maxScore, t._setScoreLv(e.scoreLv), t._updateRes(), t._updateStar()
			}, r.prototype.onProgress = function(e) {
				var r = this,
					i = r._userScore;
				r._userScore = Math.min(e + i, r._maxScore), r._progress = r._userScore / r._maxScore;
				for (var a = 0; a < r._scoreLv.length && !(100 * r._progress < r._scoreLv[a]); a++) r._completion = a + 1;
				var s = r.pg_thumb_mask.x,
					u = (r._progress - 1) * r.pg_thumb_mask.width,
					h = Math.max(Math.min(Math.floor(u - s) * t, o), n);
				egret.Tween.get(r.pg_thumb_mask).to({
					x: u
				}, h).call(function() {
					r._updateStar()
				}), this._updateRes()
			}, r.prototype.reset = function() {
				var e = this;
				e._lv = 0, e._maxScore = 0, e._userScore = 0, e._progress = 0, e._completion = 0, egret.Tween.removeTweens(e.pg_thumb_mask)
			}, r.prototype._updateRes = function() {
				var e = this;
				e.bl_lv.text = "" + e._lv, e.bl_max_score.text = "" + e._maxScore, e.bl_user_score.text = "" + e._userScore, e.pg_thumb_mask.x = (e._progress - 1) * e.pg_thumb_mask.width
			}, r.prototype._updateStar = function() {
				for (var e = 1; 3 >= e; e++) e <= this._completion ? this["pg_star_" + e].currentState = "star_" + e + "_up" : this["pg_star_" + e].currentState = "star_" + e + "_down"
			}, r
		}(eui.Component);
	e.ScoreBoard = r, __reflect(r.prototype, "view.ScoreBoard")
}(view || (view = {}));
var view;
!
function(e) {
	var t = function() {
			function e() {
				this._isTiming = !1, this._timer = new egret.Timer(1e3)
			}
			return e.prototype.bindRes = function(e) {
				this._res && (this._timer.hasEventListener(egret.TimerEvent.TIMER) && this._timer.removeEventListener(egret.TimerEvent.TIMER, this._res.onTimerEvent, this._res), this._timer.hasEventListener(egret.TimerEvent.TIMER_COMPLETE) && this._timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this._res.onTimeEnd, this._res)), this._res = e, this.reset(), this._timer.addEventListener(egret.TimerEvent.TIMER, this._res.onTimerEvent, this._res), this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this._res.onTimeEnd, this._res)
			}, e.prototype.reset = function() {
				this._isTiming = !1, this._timer.reset(), this._timer.repeatCount = dt.dataMrg.getLvTime()
			}, e.prototype.star = function() {
				this._isTiming = !0, this._timer.start()
			}, e.prototype.stop = function() {
				this._isTiming && (this._isTiming = !1, this._timer.stop())
			}, e
		}();
	__reflect(t.prototype, "TimeHandler"), e.timerHandler = new t
}(view || (view = {}));
var view;
!
function(e) {
	var t = function(t) {
			function o() {
				var o = t.call(this) || this;
				return o.viewName = "GameModelPanel", o.viewType = e.EViewType.PANEL, o.skinName = skins.GameModelPanel, o
			}
			return __extends(o, t), o.prototype.onPreShow = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchBtn, this)
			}, o.prototype._onTouchBtn = function(t) {
				switch (t.target) {
				case this.btn_infinite:
                    console.log("test___");
					e.viewMrg.showPanel("MsgPanel", {
						effectType: ui.BOUNCE_EN.IN_RUDE
					}, ["无限模式暂未开发，敬请期待！"]);
					break;
				case this.btn_level:
					dt.dataMrg.setGameModel(df.EGameModel.LV), e.viewMrg.closePanel(this.viewName), e.viewMrg.showPage("LevelPage", {
						effectType: ui.BOUNCE_EN.IN
					})
				}
			}, o.prototype.onPreClose = function() {
				this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchBtn, this)
			}, o
		}(eui.Component);
	e.GameModelPanel = t, __reflect(t.prototype, "view.GameModelPanel", ["view.IView", "IViewModel", "IViewHandle"])
}(view || (view = {}));
var view;
!
function(e) {
	var t = function(t) {
			function o() {
				var o = t.call(this) || this;
				return o.viewName = "HelpPage", o.viewType = e.EViewType.PAGE, o.skinName = skins.HelpPage, o
			}
			return __extends(o, t), o.prototype.onPreShow = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnReturn, this)
			}, o.prototype._onBtnReturn = function() {
				e.viewMrg.showPage("MenuPage", {
					effectType: ui.BOUNCE_EN.LEFT
				})
			}, o.prototype.onPreClose = function() {
				this.btn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnReturn, this)
			}, o
		}(eui.Component);
	e.HelpPage = t, __reflect(t.prototype, "view.HelpPage", ["view.IView", "IViewModel", "IViewHandle"])
}(view || (view = {}));
var view;
!
function(e) {
	var t = '\n        <e:Skin xmlns:e="http://ns.egret.com/eui" states="up,down,disabled" width="55" height="15">\n            <e:Image width="100%" height="100%" source="fanyean_png" source.down="fanyeliang_png" scale9Grid="13,6,17,4" />\n        </e:Skin>',
		o = 20,
		n = function(n) {
			function r() {
				var t = n.call(this) || this;
				return t.viewName = "LevelPage", t.viewType = e.EViewType.PAGE, t.once(eui.UIEvent.CREATION_COMPLETE, t._onCreateComplete, t), t.skinName = skins.LevelPage, t
			}
			return __extends(r, n), r.prototype._onCreateComplete = function() {
				for (var e = dt.dataMrg.getLvCount(), t = dt.dataMrg.getCompletion(), n = [], r = 0, i = 0; e > i; i++) void 0 != t[i] ? (r += t[i] || 0, n.push({
					lv: i + 1,
					completion: t[i],
					bLock: !1
				})) : n.push({
					lv: i + 1,
					completion: 0,
					bLock: !0
				});
				this.data = n, this.curPage = 0, this.pageCount = Math.max(Math.ceil(n.length / o), 1), this.s_container.throwSpeed = 0, this._updatePages(), this._updateContain(), this._updateCompletion(r)
			}, r.prototype._updatePages = function() {
				var e = this.g_pages,
					o = this.pageCount;
				for (e.removeChildren(); o !== e.numElements;) if (o < e.numElements) e.removeChildAt(0);
				else {
					var n = new eui.RadioButton;
					n.skinName = t, n.groupName = "pages", e.addChild(n)
				}
				e.getChildAt(this.curPage).selected = !0
			}, r.prototype._updateContain = function() {
				this.g_container.removeChildren();
				for (var e = 0; e < this.pageCount; e++) {
					var t = new eui.TileLayout;
					t.orientation = eui.TileOrientation.ROWS, t.horizontalAlign = egret.HorizontalAlign.LEFT, t.rowAlign = eui.RowAlign.TOP, t.horizontalGap = 18, t.verticalGap = 14;
					var n = new eui.List;
					n.width = 560, n.height = 700, n.layout = t, n.touchEnabled = !1, n.touchChildren = !0;
					for (var r = [], i = e * o; i < Math.min((e + 1) * o, this.data.length); i++) r.push(this.data[i]);
					n.dataProvider = new eui.ArrayCollection(r), n.itemRenderer = ui.LevelItemRenderer, this.g_container.addChild(n)
				}
			}, r.prototype._updateCompletion = function(e) {
				this.bl_completion.text = e + "/" + 3 * this.data.length
			}, r.prototype._onChangeEnd = function(e) {
				var t = this;
				if (!this._isChanging) {
					this._isChanging = !0;
					var o = e.target.viewport,
						n = this.s_container.width,
						r = Math.round(o.scrollH / n);
					egret.Tween.get(o).to({
						scrollH: r * n + 10 * r
					}, 200).call(function() {
						t.g_pages.getElementAt(r).selected = !0, t._isChanging = !1
					})
				}
			}, r.prototype._onTouchPage = function(e) {
				var t = this;
				if (!this._isChanging) {
					this._isChanging = !0;
					var o = this.s_container.width,
						n = this.s_container.viewport,
						r = this.g_pages.getChildIndex(e.target),
						i = (r - this.curPage) / Math.abs(r - this.curPage);
					console.log(this.curPage, r);
					for (var a = egret.Tween.get(n); this.curPage !== r;) this.curPage += i, a = a.to({
						scrollH: (o + 10) * this.curPage
					}, 250).wait(100);
					a.call(function() {
						t._isChanging = !1
					})
				}
			}, r.prototype._onTouchLvItem = function(t) {
				t.target !== this.g_container && (t.target.data.bLock || (dt.dataMrg.setCurLv(t.target.data.lv), e.viewMrg.showPage("GameView", {
					effectType: ui.BOUNCE_EN.UP
				})))
			}, r.prototype._onTouchTap = function() {
				e.viewMrg.showPage("MenuPage", {
					effectType: ui.BOUNCE_EN.RIGHT
				})
			}, r.prototype.onPreShow = function() {
				var e = this.data,
					t = dt.dataMrg.getCompletion();
				if (e) {
					for (var o = !1, n = Math.min(e.length, t.length), r = 0; n > r; r++) if (e[r].completion !== t[r]) {
						o = !0;
						break
					}
					if (o) {
						for (var i = 0, r = 0; r < t.length; r++) i += t[r] || 0, e[r].completion = t[r], e[r].bLock = !1;
						this._updateContain(), this._updateCompletion(i)
					}
				}
			}, r.prototype.onPostShow = function() {
				this._isChanging = !1, this.s_container.addEventListener(eui.UIEvent.CHANGE_END, this._onChangeEnd, this), this.g_pages.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchPage, this), this.g_container.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchLvItem, this), this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this)
			}, r.prototype.onPreClose = function() {}, r.prototype.onPostClose = function() {
				this.s_container.removeEventListener(eui.UIEvent.CHANGE_END, this._onChangeEnd, this), this.g_pages.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchPage, this), this.g_container.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchLvItem, this), this.btn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this)
			}, r
		}(eui.Component);
	e.LevelPage = n, __reflect(n.prototype, "view.LevelPage", ["view.IView", "IViewModel", "IViewHandle"])
}(view || (view = {}));
var LoadingUI = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t._initPart(), t
		}
		return __extends(t, e), t.prototype._initPart = function() {
			var e = new egret.Bitmap(RES.getRes("bg_png")),
				t = new egret.Bitmap(RES.getRes("logo_png")),
				o = new egret.Bitmap(RES.getRes("progress_trace_png")),
				n = new egret.Bitmap(RES.getRes("progress_thumb_png")),
				r = new egret.Bitmap(RES.getRes("progress_thumb_png"));
			this.addChild(e), this.addChild(t), this.addChild(o), this.addChild(n), this.addChild(r), e.height = 1136, t.anchorOffsetY = 146, t.anchorOffsetX = 252, t.scaleX = t.scaleY = .5, t.x = 320, t.y = 450, o.x = n.x = r.x = 146, o.y = n.y = r.y = 538, n.mask = r, r.x = n.x - r.width, this.thumb = n, this.thumb_mask = r
		}, t.prototype.onProgress = function(e, t) {
			var o = Math.round(e / t * 100) / 100;
			this.thumb_mask.x = (o - 1) * this.thumb_mask.width + this.thumb.x
		}, t
	}(eui.UILayer);
__reflect(LoadingUI.prototype, "LoadingUI");
var view;
!
function(e) {
	var t = function(t) {
			function o() {
				var o = t.call(this) || this;
				return o.viewName = "MenuPage", o.viewType = e.EViewType.PAGE, o.once(eui.UIEvent.COMPLETE, o._onComplete, o), o.skinName = skins.MenuPage, o
			}
			return __extends(o, t), o.prototype._onComplete = function() {}, o.prototype._onBtnStart = function() {
				e.viewMrg.showPanel("GameModelPanel", {
					effectType: ui.BOUNCE_EN.IN
				})
			}, o.prototype._onBtnHelp = function() {
				e.viewMrg.showPage("HelpPage", {
					effectType: ui.BOUNCE_EN.RIGHT
				})
			}, o.prototype._onBtnShop = function() {
				e.viewMrg.showPage("ShopPage", {
					effectType: ui.BOUNCE_EN.LEFT
				})
			}, o.prototype.onPreShow = function() {
				this.tgShow.play(0)
			}, o.prototype.onPostShow = function() {
				this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnStart, this), this.btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnHelp, this), this.btn_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnShop, this)
			}, o.prototype.onPreClose = function() {
				this.btn_start.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnStart, this), this.btn_help.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnHelp, this), this.btn_shop.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnShop, this)
			}, o
		}(eui.Component);
	e.MenuPage = t, __reflect(t.prototype, "view.MenuPage", ["view.IView", "IViewModel", "IViewHandle"])
}(view || (view = {}));
var view;
!
function(e) {
	var t = function(t) {
			function o() {
				var o = t.call(this) || this;
				return o.viewName = "MsgPanel", o.viewType = e.EViewType.PANEL, o.skinName = skins.MsgPanel, o
			}
			return __extends(o, t), o.prototype._onTouchTap = function(t) {
				e.viewMrg.closePanel(this.viewName, {
					effectType: ui.BOUNCE_EX.IN_OUT
				})
			}, o.prototype.onPreShow = function(e) {
				void 0 === e && (e = ""), this.l_msg.text = e, this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this)
			}, o.prototype.onPreClose = function() {
				this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this)
			}, o
		}(eui.Component);
	e.MsgPanel = t, __reflect(t.prototype, "view.MsgPanel", ["view.IView", "IViewModel", "IViewHandle"])
}(view || (view = {}));
var view;
!
function(e) {
	var t = function(t) {
			function o() {
				var o = t.call(this) || this;
				return o.viewName = "PausePanel", o.viewType = e.EViewType.PANEL, o.skinName = skins.PausePanel, o
			}
			return __extends(o, t), o.prototype._onTouchTap = function(t) {
				var o = this;
				switch (t.target) {
				case o.btn_close:
				case o.btn_continue:
                    console.log("continue_____");
					e.viewMrg.closePanel(this.viewName, {
						effectType: ui.BOUNCE_EX.IN_OUT
					}), e.timerHandler.star();
					break;
				case o.btn_back:
					console.log("btn_back");
					dt.dataMrg.setGameStatus(df.EGameStatus.FREE), e.viewMrg.closePanel(), e.timerHandler.stop(), e.viewMrg.showPage("LevelPage", {
						effectType: ui.BOUNCE_EN.DOWN
					});
					break;
				case o.btn_last:
					console.log("btn_last");
					dt.dataMrg.setGameStatus(df.EGameStatus.FREE), dt.dataMrg.setCurLv(dt.dataMrg.getCurLv() - 1), e.viewMrg.closePanel(), e.viewMrg.showPage("GameView");
					break;
				case o.btn_restart:
					console.log("btn_restart");
					dt.dataMrg.setGameStatus(df.EGameStatus.FREE), e.viewMrg.closePanel(), e.viewMrg.showPage("GameView");
					break;
				case o.btn_music:
					console.log("btn_music");
					dt.dataMrg.setOnMusic(o.btn_music.selected);
					break;
				case o.btn_voice:
					console.log("btn_voice");
					dt.dataMrg.setOnVoice(o.btn_voice.selected)
				}
			}, o.prototype.onPreShow = function() {
				this.btn_music.selected = dt.dataMrg.getOnMusic(), this.btn_voice.selected = dt.dataMrg.getOnVoice(), e.timerHandler.stop()
			}, o.prototype.onPostShow = function() {
				this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this)
			}, o.prototype.onPreClose = function() {
				this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this)
			}, o
		}(eui.Component);
	e.PausePanel = t, __reflect(t.prototype, "view.PausePanel", ["view.IView", "IViewModel", "IViewHandle"])
}(view || (view = {}));
var view;
!
function(e) {
	var t = "result_wenzigongxiguoguan_png",
		o = "result_wenzichuangguanshibai_png",
		n = function(n) {
			function r() {
				var t = n.call(this) || this;
				return t.viewName = "ResultPanel", t.viewType = e.EViewType.PANEL, t.skinName = skins.ResultPanel, t
			}
			return __extends(r, n), r.prototype._onTouchTap = function(t) {
				var o = this;
				switch (t.target) {
				case o.btn_back:
					dt.dataMrg.setGameStatus(df.EGameStatus.FREE), e.viewMrg.closePanel(), e.viewMrg.showPage("LevelPage", {
						effectType: ui.BOUNCE_EN.DOWN
					});
					break;
				case o.btn_restart:
					dt.dataMrg.setGameStatus(df.EGameStatus.FREE), e.viewMrg.closePanel(), e.viewMrg.showPage("GameView");
					break;
				case o.btn_next:
					dt.dataMrg.setGameStatus(df.EGameStatus.FREE), dt.dataMrg.setCurLv(dt.dataMrg.getCurLv() + 1), e.viewMrg.closePanel(), e.viewMrg.showPage("GameView")
				}
			}, r.prototype.onPreShow = function(e, n, r) {
				void 0 === r && (r = !1);
				var i = this,
					a = dt.dataMrg.getGameModel();
				if (a === df.EGameModel.FREE) i.currentState = "free", i.bl_maxScore.text = "" + dt.dataMrg.getFreeMaxScore();
				else if (a === df.EGameModel.LV) {
					!r && n >= 1 ? i.icon_result.source = t : i.icon_result.source = o, i.currentState = "lv", i.bl_maxScore.text = "" + dt.dataMrg.getLvMaxScore(), i.bl_score.text = "" + e;
					for (var s = 0; s < i.g_completion.numElements; s++) n > s ? i.g_completion.getChildAt(s).visible = !0 : i.g_completion.getChildAt(s).visible = !1
				}
				i.icon_pass && (n >= 1 && !r ? (i.icon_pass.visible = !0, egret.Tween.get(i.icon_pass, {
					loop: !0
				}).to({
					rotation: 360
				}, 2e3)) : i.icon_pass.visible = !1)
			}, r.prototype.onPostShow = function() {
				this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this)
			}, r.prototype.onPreClose = function() {
				egret.Tween.removeTweens(this.icon_pass)
			}, r.prototype.onPostClose = function() {
				this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this)
			}, r
		}(eui.Component);
	e.ResultPanel = n, __reflect(n.prototype, "view.ResultPanel", ["view.IView", "IViewModel", "IViewHandle"])
}(view || (view = {}));
var view;
!
function(e) {
	var t = function(t) {
			function o() {
				var o = t.call(this) || this;
				return o.viewName = "ShopPage", o.viewType = e.EViewType.PAGE, o.skinName = skins.ShopPage, o
			}
			return __extends(o, t), o.prototype.createChildren = function() {
				this.g_btns.parent && this.g_btns.parent.removeChild(this.g_btns)
			}, o.prototype._addEventListener = function() {
				this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnReturn, this), this.btn_add.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnAdd, this), this.btn_min.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnMin, this), this.btn_pay.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnPay, this), this.g_tool.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onSelectTool, this)
			}, o.prototype._onBtnReturn = function() {
				e.viewMrg.showPage("MenuPage", {
					effectType: ui.BOUNCE_EN.RIGHT
				})
			}, o.prototype._onBtnAdd = function() {
				var e = Math.min(100, Number(this._curOperate.bl_count.text) + 1),
					t = e * df.TOOL_PRICE[this._curOperate.currentState];
				this._curOperate.bl_count.text = "" + e, this._curOperate.bl_cost.text = "" + t, this._updatePay()
			}, o.prototype._onBtnMin = function() {
				var e = Math.max(0, Number(this._curOperate.bl_count.text) - 1),
					t = e * df.TOOL_PRICE[this._curOperate.currentState];
				this._curOperate.bl_count.text = "" + e, this._curOperate.bl_cost.text = "" + t, this._updatePay()
			}, o.prototype._onBtnPay = function() {
				var e = Number(this.c_hummer.bl_count.text),
					t = Number(this.c_bomb.bl_count.text),
					o = Number(this.c_color.bl_count.text),
					n = Number(this.c_guid.bl_count.text);
				dt.dataMrg.updateToolCount("hummer", e), dt.dataMrg.updateToolCount("bomb", t), dt.dataMrg.updateToolCount("color", o), dt.dataMrg.updateToolCount("guid", n), dt.dataMrg.updateCoin(-this._totalCost), this._updateBtns(!1), this._updateCost(), this._updateCount(), this._updateTool(), this._updateCoin(), this._updatePay(), console.log("pay", this._totalCost), this._totalCost = 0
			}, o.prototype._onSelectTool = function(e) {
				var t = this;
				return t._curOperate === e.target ? (t._curOperate = null, void t._updateBtns(!1)) : (t._curOperate = e.target, void t._updateBtns(!0))
			}, o.prototype._removeEventListener = function() {
				this.btn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnReturn, this), this.btn_add.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnAdd, this), this.btn_min.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnMin, this), this.btn_pay.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnPay, this), this.g_tool.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onSelectTool, this)
			}, o.prototype._updateCost = function() {
				this.c_hummer.bl_cost.text = "0", this.c_bomb.bl_cost.text = "0", this.c_color.bl_cost.text = "0", this.c_guid.bl_cost.text = "0"
			}, o.prototype._updateCount = function() {
				this.c_hummer.bl_count.text = "0", this.c_bomb.bl_count.text = "0", this.c_color.bl_count.text = "0", this.c_guid.bl_count.text = "0"
			}, o.prototype._updateTool = function() {
				var e = dt.dataMrg.getToolCount();
				this.c_hummer.tool.bl_num.text = "" + e.hummer, this.c_bomb.tool.bl_num.text = "" + e.bomb, this.c_color.tool.bl_num.text = "" + e.color, this.c_guid.tool.bl_num.text = "" + e.guid
			}, o.prototype._updatePay = function() {
				var e = !1,
					t = Number(this.c_hummer.bl_count.text),
					o = Number(this.c_bomb.bl_count.text),
					n = Number(this.c_color.bl_count.text),
					r = Number(this.c_guid.bl_count.text);
				0 == t && 0 == o && 0 == n && 0 == r && (e = !0);
				var i = t * df.TOOL_PRICE.hummer + r * df.TOOL_PRICE.guid + o * df.TOOL_PRICE.bomb + n * df.TOOL_PRICE.color;
				i > dt.dataMrg.getCoin() && (e = !0), this._totalCost = i, this.btn_pay.enabled = !e
			}, o.prototype._updateCoin = function() {
				this.l_coin.text = "" + dt.dataMrg.getCoin()
			}, o.prototype._updateBtns = function(e) {
				e ? (this.g_btns.parent || this.addChild(this.g_btns), this.g_btns.y = this.g_tool.y + this._curOperate.y + 4) : this.g_btns.parent && this.g_btns.parent.removeChild(this.g_btns)
			}, o.prototype.onPreShow = function() {
				this._addEventListener(), this._updateBtns(!1), this._updateCost(), this._updateCount(), this._updateTool(), this._updatePay(), this._updateCoin()
			}, o.prototype.onPreClose = function() {
				this._removeEventListener()
			}, o
		}(eui.Component);
	e.ShopPage = t, __reflect(t.prototype, "view.ShopPage", ["view.IView", "IViewModel", "IViewHandle"])
}(view || (view = {}));
var view;
!
function(e) {
	function t(e, t, o, n) {
		if (n >= t) return 0;
		var r = o - e,
			i = Math.abs(n - t);
		return 180 * Math.atan(r / i) / Math.PI
	}
	var o = function() {
			function o() {}
			return o.prototype.bindRes = function(e) {
				this._gameView = e, this._onGuildLine = !1, this._initHandler()
			}, o.prototype._initHandler = function() {
				this._arrow = this._gameView.icon_arrow, this._guidLineHandler = new e.GuidLineHandler(this._gameView.g_guidLine), this._comboHandler = new e.ComboEffectHandler(this._gameView.g_comboEffect), e.timerHandler.bindRes(this._gameView), this._gameView.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnBegin, this)
			}, o.prototype.gameStar = function() {
				this._gameView.btn_pause.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnPause, this), this._gameView.btn_change.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnSwitch, this), this._gameView.g_tool.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._onTouchToolBegin, this), this._gameView.g_handle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._onUserTouchBegin, this)
			}, o.prototype.showCombo = function(e, t) {
				this._comboHandler.showCombo(e, t)
			}, o.prototype.gameEnd = function() {
				this._comboHandler.reset(), this._gameView.btn_pause.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnPause, this), this._gameView.btn_change.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnSwitch, this), this._gameView.g_tool.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this._onTouchToolBegin, this), this._gameView.g_handle.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this._onUserTouchBegin, this)
			}, o.prototype._onBtnPause = function() {
				e.viewMrg.showPanel("PausePanel", {
					effectType: ui.BOUNCE_EN.IN
				})
			}, o.prototype._onBtnBegin = function() {
				e.timerHandler.reset(), this.gameStar(), this._gameView.gameStart()
			}, o.prototype._onBtnSwitch = function() {
				this._gameView.amSwitch()
			}, o.prototype._onTouchToolBegin = function(e) {
				var t = e.target;
				t.icon_tool.scaleX = 1.1, t.icon_tool.scaleY = 1.1, this._gameView.g_tool.addEventListener(egret.TouchEvent.TOUCH_END, this._onTouchToolEnd, this), this._gameView.g_tool.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this._onTouchCancel, this), this._gameView.g_tool.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._onTouchCancel, this)
			}, o.prototype._onTouchToolEnd = function(e) {
				var t = e.target;
				switch (t.name) {
				case "bomb":
					this._gameView.useTool(t);
					break;
				case "guid":
					this._onGuildLine || (this._onGuildLine = !0, this._gameView.useTool(t));
					break;
				case "color":
					this._gameView.useTool(t);
					break;
				case "hummer":
					this._gameView.useTool(t)
				}
				this._onTouchCancel(e)
			}, o.prototype._onTouchCancel = function(e) {
				var t = e.target;
				t.icon_tool.scaleX = 1, t.icon_tool.scaleY = 1, this._gameView.g_tool.removeEventListener(egret.TouchEvent.TOUCH_END, this._onTouchToolEnd, this), this._gameView.g_tool.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this._onTouchCancel, this), this._gameView.g_tool.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._onTouchCancel, this)
			}, o.prototype._onUserTouchBegin = function(e) {
				dt.dataMrg.getGameStatus() === df.EGameStatus.PLAYING && (this._gameView.isShooting || (this._updateView(e), this._gameView.g_handle.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._updateView, this), this._gameView.g_handle.addEventListener(egret.TouchEvent.TOUCH_END, this._onUserTouchEnd, this), this._gameView.g_bubble.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this._touchEnd, this), this._gameView.g_handle.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._touchEnd, this)))
			}, o.prototype._updateView = function(o) {
				var n = Math.min(Math.max(o.stageX, this._guidLineHandler.left), this._guidLineHandler.right),
					r = Math.min(Math.max(o.stageY, this._guidLineHandler.top), this._guidLineHandler.bottom);
				this._angle = t(e.SHOOT_START_POSITION.x, e.SHOOT_START_POSITION.y, n, r), this._arrow.show(this._angle), this._onGuildLine && this._guidLineHandler.show(e.SHOOT_START_POSITION.x, e.SHOOT_START_POSITION.y, n, r, this._angle)
			}, o.prototype._onUserTouchEnd = function() {
				this._gameView.startShooting(this._angle), this._onGuildLine = !1, this._touchEnd()
			}, o.prototype._touchEnd = function() {
				this._arrow.hide(), this._guidLineHandler.hide(), this._gameView.g_handle.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._updateView, this), this._gameView.g_handle.removeEventListener(egret.TouchEvent.TOUCH_END, this._onUserTouchEnd, this), this._gameView.g_bubble.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this._touchEnd, this), this._gameView.g_handle.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._touchEnd, this)
			}, o
		}();
	e.GameHandler = o, __reflect(o.prototype, "view.GameHandler"), e.gameHandler = new o
}(view || (view = {}));