(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{53:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"backend-validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backend-validation","aria-hidden":"true"}},[t._v("#")]),t._v(" Backend Validation")]),s("p",[t._v("You might need to also use your Laravel/Express or whatever back-end as your validation provider for numerous reasons, like checking if an email is unique since it is hard to implement on the client-side, we can achieve this using a custom rule and the "),s("code",[t._v("reasoning")]),t._v(" feature:")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'axios'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// great ajax library.")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Validator "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("isUnique")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" axios"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("post")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/api/validate/email'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" email"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Notice that we return an object containing both a valid property and a data property.")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      valid"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" response"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("valid"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        message"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" response"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// The messages getter may also accept a third parameter that includes the data we returned earlier.")]),t._v("\nValidator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extend")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'unique'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  validate"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" isUnique"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  getMessage"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("The following demo shows how it would work in action, note that it will only trigger if the user entered a valid email since the validator early exits upon first failure.")]),s("p",[t._v("Since there is no real DB in this example, it's being simulated by a dynamic array.")])])}],!1,null,null,null);a.default=e.exports}}]);