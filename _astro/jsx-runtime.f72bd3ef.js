import{r as i}from"./index.03be2d59.js";const d={English:"en"},E={indexName:"XXXXXXXXXX",appId:"XXXXXXXXXX",apiKey:"XXXXXXXXXX"};var _={exports:{}},X={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=i,l=Symbol.for("react.element"),m=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,x=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function f(t,r,s){var e,o={},n=null,p=null;s!==void 0&&(n=""+s),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)u.call(r,e)&&!y.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:l,type:t,key:n,ref:p,props:o,_owner:x.current}}X.Fragment=m;X.jsx=f;X.jsxs=f;_.exports=X;var O=_.exports;export{E as A,d as K,O as j};
