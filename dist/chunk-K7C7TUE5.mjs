var f=Object.defineProperty;var g=(b,a,c)=>a in b?f(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c;var h=(b,a,c)=>(g(b,typeof a!="symbol"?a+"":a,c),c),d=(b,a,c)=>{if(!a.has(b))throw TypeError("Cannot "+c)};var i=(b,a,c)=>(d(b,a,"read from private field"),c?c.call(b):a.get(b)),j=(b,a,c)=>{if(a.has(b))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(b):a.set(b,c)},k=(b,a,c,e)=>(d(b,a,"write to private field"),e?e.call(b,c):a.set(b,c),c);var l=(b,a,c)=>(d(b,a,"access private method"),c);export{h as a,i as b,j as c,k as d,l as e};
