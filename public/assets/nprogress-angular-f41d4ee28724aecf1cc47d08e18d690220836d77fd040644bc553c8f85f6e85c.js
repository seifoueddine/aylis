angular.module("nprogress-rails",[]).config(["$httpProvider",function(r){r.interceptors.push(["$q",function(e){return{request:function(r){return NProgress.start(),r},requestError:function(r){return NProgress.done(),e.reject(r)},response:function(r){return NProgress.done(),r},responseError:function(r){return NProgress.done(),e.reject(r)}}}])}]);