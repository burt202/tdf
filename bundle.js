!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=0)}([function(t,e,o){t.exports=o(1)},function(t,e,o){o(2)()},function(t,e){t.exports=()=>{const t=document.getElementById("chart").getContext("2d"),e=["2017","2018","2019","2020","2021"],o=[{textColor:"white",lineColour:"black",points:[{text:"Team Sky",coords:[0,1]},{text:"Team Sky",coords:[1,4]},{text:"Team Sky",coords:[2,1]},{text:"Team Sky",coords:[3,2]},{text:"Team Sky",coords:[4,1]}]},{textColor:"white",lineColour:"rgb(200,0,0)",points:[{text:"BMC Racing",coords:[0,2]},{text:"BMC Racing",coords:[1,1]},{text:"BMC Racing",coords:[2,0]},{text:"BMC Racing",coords:[3,1]},{text:"BMC Racing",coords:[4,2]}]}],n=900/(e.length-1);function r(e){const r=o[e].points;t.beginPath();const l=r[0].coords[0]*n+100,c=90*r[0].coords[1]+100;t.moveTo(l,c);for(let l=0;l<r.length;l++){const c=r[l].coords;t.strokeStyle=o[e].lineColour,t.lineWidth=2;const i=c[0]*n+100,s=90*c[1]+100;t.lineTo(i,s),t.stroke()}t.closePath()}function l(e){const r=o[e].points;for(let u=0;u<r.length;u++){const a=r[u].text,d=r[u].coords,g=d[0]*n+100,x=90*d[1]+100;t.fillStyle=o[e].lineColour,l=g-75,c=x-20,(i=150)<2*(f=8)&&(f=i/2),(s=40)<2*f&&(f=s/2),t.beginPath(),t.moveTo(l+f,c),t.arcTo(l+i,c,l+i,c+s,f),t.arcTo(l+i,c+s,l,c+s,f),t.arcTo(l,c+s,l,c,f),t.arcTo(l,c,l+i,c,f),t.closePath(),t.fill(),t.font="16px serif",t.fillStyle=o[e].textColor,t.textAlign="center",t.fillText(a,g,x+5)}var l,c,i,s,f}t.canvas.width=1100,t.canvas.height=650;const c=function(t,e){let o=[];for(let n=0;n<t-1;n++){const t=(n+1)*e+100;o.push(t)}return[100,...o]}(e.length,n),i=function(t,e){let o=[];for(let n=0;n<t;n++){const r=e-(n+1)*(e/t)+100;o.push(r)}return[e+100,...o]}(5,450);!function(){for(let e=1;e<c.length-1;e++)t.strokeStyle="rgba(29, 210, 175,0.3)",t.lineWidth=1,t.moveTo(c[e],100),t.lineTo(c[e],550);t.stroke()}(),function(){for(let e=1;e<i.length-1;e++)t.strokeStyle="rgba(29, 210, 175,0.3)",t.lineWidth=1,t.moveTo(100,i[e]),t.lineTo(1e3,i[e]);t.stroke()}();for(let t=0;t<o.length;t++)r(t),l(t);!function(){t.font="16px serif",t.fillStyle="rgb(200,0,0)",t.textAlign="left";for(let o=0;o<e.length;o++){const r=80+o*n;t.fillText(e[o],r,40)}}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiaW5pdCIsImN0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiY29scyIsImxpbmVzIiwidGV4dENvbG9yIiwibGluZUNvbG91ciIsInBvaW50cyIsInRleHQiLCJjb29yZHMiLCJjb2x1bW5XaWR0aCIsImxlbmd0aCIsImRyYXdEYXRhTGluZXMiLCJsaW5lUG9pbnRzIiwiYmVnaW5QYXRoIiwibW92ZVRvWCIsIm1vdmVUb1kiLCJjaGFydEhlaWdodCIsIm1vdmVUbyIsImoiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImxpbmVUb1giLCJsaW5lVG9ZIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiZHJhd0RhdGFMYWJlbHMiLCJmaWxsU3R5bGUiLCJ4IiwieSIsIndpZHRoIiwicmFkaXVzIiwiaGVpZ2h0IiwiYXJjVG8iLCJmaWxsIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiY2FudmFzIiwiY2hhcnRXaWR0aCIsImNvbHVtbkNvb3JkcyIsIm5vT2ZDb2xzIiwiYXJyIiwiY29vcmQiLCJwdXNoIiwiZ2V0Q29sdW1uQ29vcmRzIiwicm93Q29vcmRzIiwibm9PZlJvd3MiLCJnZXRSb3dDb29yZHMiLCJkcmF3VmVydGljYWxHcmlkTGluZXMiLCJkcmF3SG9yaXpvbnRhbEdyaWRMaW5lcyIsInBhZGRpbmciLCJkcmF3Q29sdW1uSGVhZGVycyJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFzQkEsR0FBU0EsRUFBTUcsV0FBWSxPQUFPSCxFQUNoRixJQUFJSSxFQUFLWCxPQUFPWSxPQUFPLE1BR3ZCLEdB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RUFBR0EsRUFBSWtGLEVBQVVsRixJQUFLLENBQ2pDLE1BQU04RSxFQUFRWCxHQUFVbkUsRUFBSSxJQUFNbUUsRUFBU2UsR0FwRC9CLElBcURaTCxFQUFJRSxLQUFLRCxHQUdYLE1BQU8sQ0FBQ1gsRUF4RE0sT0F3RGVVLEdBZ0diTSxDQW5KRCxFQU5HLE1BeUVwQixXQUNFLElBQUssSUFBSW5GLEVBQUksRUFBR0EsRUFBSTJFLEVBQWE5QixPQUFTLEVBQUc3QyxJQUMzQ2lDLEVBQUlxQixZQXpFZSx5QkEwRW5CckIsRUFBSXNCLFVBQVksRUFDaEJ0QixFQUFJbUIsT0FBT3VCLEVBQWEzRSxHQTVFWixLQTZFWmlDLEVBQUl5QixPQUFPaUIsRUFBYTNFLEdBQUltRCxLQUc5QmxCLEVBQUkwQixTQTBFTnlCLEdBdkVBLFdBQ0UsSUFBSyxJQUFJcEYsRUFBSSxFQUFHQSxFQUFJaUYsRUFBVXBDLE9BQVMsRUFBRzdDLElBQ3hDaUMsRUFBSXFCLFlBcEZlLHlCQXFGbkJyQixFQUFJc0IsVUFBWSxFQUNoQnRCLEVBQUltQixPQXZGUSxJQXVGUTZCLEVBQVVqRixJQUM5QmlDLEVBQUl5QixPQUFPZ0IsSUFBc0JPLEVBQVVqRixJQUc3Q2lDLEVBQUkwQixTQWdFTjBCLEdBRUEsSUFBSyxJQUFJckYsRUFBSSxFQUFHQSxFQUFJc0MsRUFBTU8sT0FBUTdDLElBQ2hDOEMsRUFBYzlDLEdBQ2Q2RCxFQUFlN0QsSUFuQmpCLFdBQ0VpQyxFQUFJcUMsS0FBTyxhQUNYckMsRUFBSTZCLFVBNUlvQixlQTZJeEI3QixFQUFJc0MsVUFBWSxPQUVoQixJQUFLLElBQUl2RSxFQUFJLEVBQUdBLEVBQUlxQyxFQUFLUSxPQUFRN0MsSUFBSyxDQUNwQyxNQUFNK0QsRUFBSXVCLEdBQWV0RixFQUFJNEMsRUFDN0JYLEVBQUl1QyxTQUFTbkMsRUFBS3JDLEdBQUkrRCxFQUFHLEtBZTdCd0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IGluaXQgPSByZXF1aXJlKFwiLi9tYWluXCIpXG5cbmluaXQoKVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWFpblwiLCAoKSA9PiB7XG4gICAgY29uc3QgaW5pdCA9IHJlcXVpcmUoXCIuL21haW5cIilcblxuICAgIGluaXQoKVxuICB9KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnRcIikuZ2V0Q29udGV4dChcIjJkXCIpXG5cbiAgY29uc3QgY2hhcnRXaWR0aCA9IDkwMFxuICBjb25zdCBjaGFydEhlaWdodCA9IDQ1MFxuICBjb25zdCBwYWRkaW5nID0gMTAwXG4gIGNvbnN0IGdyaWRMaW5lQ29sb3VyID0gXCJyZ2JhKDI5LCAyMTAsIDE3NSwwLjMpXCJcbiAgY29uc3QgY29sdW1uVGl0bGVDb2xvdXIgPSBcInJnYigyMDAsMCwwKVwiXG5cbiAgY29uc3QgY29scyA9IFtcIjIwMTdcIiwgXCIyMDE4XCIsIFwiMjAxOVwiLCBcIjIwMjBcIiwgXCIyMDIxXCJdXG4gIGNvbnN0IHJvd0NvdW50ID0gNVxuICBjb25zdCBsaW5lcyA9IFtcbiAgICB7XG4gICAgICB0ZXh0Q29sb3I6IFwid2hpdGVcIixcbiAgICAgIGxpbmVDb2xvdXI6IFwiYmxhY2tcIixcbiAgICAgIHBvaW50czogW1xuICAgICAgICB7dGV4dDogXCJUZWFtIFNreVwiLCBjb29yZHM6IFswLCAxXX0sXG4gICAgICAgIHt0ZXh0OiBcIlRlYW0gU2t5XCIsIGNvb3JkczogWzEsIDRdfSxcbiAgICAgICAge3RleHQ6IFwiVGVhbSBTa3lcIiwgY29vcmRzOiBbMiwgMV19LFxuICAgICAgICB7dGV4dDogXCJUZWFtIFNreVwiLCBjb29yZHM6IFszLCAyXX0sXG4gICAgICAgIHt0ZXh0OiBcIlRlYW0gU2t5XCIsIGNvb3JkczogWzQsIDFdfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0Q29sb3I6IFwid2hpdGVcIixcbiAgICAgIGxpbmVDb2xvdXI6IFwicmdiKDIwMCwwLDApXCIsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge3RleHQ6IFwiQk1DIFJhY2luZ1wiLCBjb29yZHM6IFswLCAyXX0sXG4gICAgICAgIHt0ZXh0OiBcIkJNQyBSYWNpbmdcIiwgY29vcmRzOiBbMSwgMV19LFxuICAgICAgICB7dGV4dDogXCJCTUMgUmFjaW5nXCIsIGNvb3JkczogWzIsIDBdfSxcbiAgICAgICAge3RleHQ6IFwiQk1DIFJhY2luZ1wiLCBjb29yZHM6IFszLCAxXX0sXG4gICAgICAgIHt0ZXh0OiBcIkJNQyBSYWNpbmdcIiwgY29vcmRzOiBbNCwgMl19LFxuICAgICAgXSxcbiAgICB9LFxuICBdXG5cbiAgY29uc3QgY29sdW1uV2lkdGggPSBjaGFydFdpZHRoIC8gKGNvbHMubGVuZ3RoIC0gMSlcbiAgY29uc3Qgcm93SGVpZ2h0ID0gY2hhcnRIZWlnaHQgLyByb3dDb3VudFxuXG4gIGN0eC5jYW52YXMud2lkdGggPSBjaGFydFdpZHRoICsgMiAqIHBhZGRpbmdcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBjaGFydEhlaWdodCArIDIgKiBwYWRkaW5nXG5cbiAgZnVuY3Rpb24gZ2V0Q29sdW1uQ29vcmRzKG5vT2ZDb2xzLCB3aWR0aCkge1xuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub09mQ29scyAtIDE7IGkrKykge1xuICAgICAgY29uc3QgY29vcmQgPSAoaSArIDEpICogd2lkdGggKyBwYWRkaW5nXG4gICAgICBhcnIucHVzaChjb29yZClcbiAgICB9XG5cbiAgICByZXR1cm4gWzAgKyBwYWRkaW5nLCAuLi5hcnJdXG4gIH1cblxuICBmdW5jdGlvbiBnZXRSb3dDb29yZHMobm9PZlJvd3MsIGhlaWdodCkge1xuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub09mUm93czsgaSsrKSB7XG4gICAgICBjb25zdCBjb29yZCA9IGhlaWdodCAtIChpICsgMSkgKiAoaGVpZ2h0IC8gbm9PZlJvd3MpICsgcGFkZGluZ1xuICAgICAgYXJyLnB1c2goY29vcmQpXG4gICAgfVxuXG4gICAgcmV0dXJuIFtoZWlnaHQgKyBwYWRkaW5nLCAuLi5hcnJdXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3Um91bmRlZFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpIHtcbiAgICBpZiAod2lkdGggPCAyICogcmFkaXVzKSByYWRpdXMgPSB3aWR0aCAvIDJcbiAgICBpZiAoaGVpZ2h0IDwgMiAqIHJhZGl1cykgcmFkaXVzID0gaGVpZ2h0IC8gMlxuXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KVxuICAgIGN0eC5hcmNUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIGhlaWdodCwgcmFkaXVzKVxuICAgIGN0eC5hcmNUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQsIHJhZGl1cylcbiAgICBjdHguYXJjVG8oeCwgeSArIGhlaWdodCwgeCwgeSwgcmFkaXVzKVxuICAgIGN0eC5hcmNUbyh4LCB5LCB4ICsgd2lkdGgsIHksIHJhZGl1cylcbiAgICBjdHguY2xvc2VQYXRoKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdWZXJ0aWNhbEdyaWRMaW5lcygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGNvbHVtbkNvb3Jkcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGdyaWRMaW5lQ29sb3VyXG4gICAgICBjdHgubGluZVdpZHRoID0gMVxuICAgICAgY3R4Lm1vdmVUbyhjb2x1bW5Db29yZHNbaV0sIHBhZGRpbmcpXG4gICAgICBjdHgubGluZVRvKGNvbHVtbkNvb3Jkc1tpXSwgY2hhcnRIZWlnaHQgKyBwYWRkaW5nKVxuICAgIH1cblxuICAgIGN0eC5zdHJva2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0hvcml6b250YWxHcmlkTGluZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3dDb29yZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBncmlkTGluZUNvbG91clxuICAgICAgY3R4LmxpbmVXaWR0aCA9IDFcbiAgICAgIGN0eC5tb3ZlVG8ocGFkZGluZywgcm93Q29vcmRzW2ldKVxuICAgICAgY3R4LmxpbmVUbyhjaGFydFdpZHRoICsgcGFkZGluZywgcm93Q29vcmRzW2ldKVxuICAgIH1cblxuICAgIGN0eC5zdHJva2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0RhdGFMaW5lcyhpKSB7XG4gICAgY29uc3QgbGluZVBvaW50cyA9IGxpbmVzW2ldLnBvaW50c1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpXG5cbiAgICBjb25zdCBtb3ZlVG9YID0gbGluZVBvaW50c1swXS5jb29yZHNbMF0gKiBjb2x1bW5XaWR0aCArIHBhZGRpbmdcbiAgICBjb25zdCBtb3ZlVG9ZID0gbGluZVBvaW50c1swXS5jb29yZHNbMV0gKiByb3dIZWlnaHQgKyBwYWRkaW5nXG4gICAgY3R4Lm1vdmVUbyhtb3ZlVG9YLCBtb3ZlVG9ZKVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5lUG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBjb29yZHMgPSBsaW5lUG9pbnRzW2pdLmNvb3Jkc1xuXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBsaW5lc1tpXS5saW5lQ29sb3VyXG4gICAgICBjdHgubGluZVdpZHRoID0gMlxuXG4gICAgICBjb25zdCBsaW5lVG9YID0gY29vcmRzWzBdICogY29sdW1uV2lkdGggKyBwYWRkaW5nXG4gICAgICBjb25zdCBsaW5lVG9ZID0gY29vcmRzWzFdICogcm93SGVpZ2h0ICsgcGFkZGluZ1xuICAgICAgY3R4LmxpbmVUbyhsaW5lVG9YLCBsaW5lVG9ZKVxuICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgY3R4LmNsb3NlUGF0aCgpXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3RGF0YUxhYmVscyhpKSB7XG4gICAgY29uc3QgbGluZVBvaW50cyA9IGxpbmVzW2ldLnBvaW50c1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5lUG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gbGluZVBvaW50c1tqXS50ZXh0XG4gICAgICBjb25zdCBjb29yZHMgPSBsaW5lUG9pbnRzW2pdLmNvb3Jkc1xuXG4gICAgICBjb25zdCBsaW5lVG9YID0gY29vcmRzWzBdICogY29sdW1uV2lkdGggKyBwYWRkaW5nXG4gICAgICBjb25zdCBsaW5lVG9ZID0gY29vcmRzWzFdICogcm93SGVpZ2h0ICsgcGFkZGluZ1xuXG4gICAgICBjdHguZmlsbFN0eWxlID0gbGluZXNbaV0ubGluZUNvbG91clxuXG4gICAgICBkcmF3Um91bmRlZFJlY3RhbmdsZShsaW5lVG9YIC0gNzUsIGxpbmVUb1kgLSAyMCwgMTUwLCA0MCwgOClcblxuICAgICAgY3R4LmZpbGwoKVxuICAgICAgY3R4LmZvbnQgPSBcIjE2cHggc2VyaWZcIlxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGxpbmVzW2ldLnRleHRDb2xvclxuICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCJcbiAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBsaW5lVG9YLCBsaW5lVG9ZICsgNSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3Q29sdW1uSGVhZGVycygpIHtcbiAgICBjdHguZm9udCA9IFwiMTZweCBzZXJpZlwiXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbHVtblRpdGxlQ29sb3VyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBwYWRkaW5nIC0gMjAgKyBpICogY29sdW1uV2lkdGhcbiAgICAgIGN0eC5maWxsVGV4dChjb2xzW2ldLCB4LCA0MClcbiAgICB9XG4gIH1cblxuICBjb25zdCBjb2x1bW5Db29yZHMgPSBnZXRDb2x1bW5Db29yZHMoY29scy5sZW5ndGgsIGNvbHVtbldpZHRoKVxuICBjb25zdCByb3dDb29yZHMgPSBnZXRSb3dDb29yZHMocm93Q291bnQsIGNoYXJ0SGVpZ2h0KVxuXG4gIGRyYXdWZXJ0aWNhbEdyaWRMaW5lcygpXG4gIGRyYXdIb3Jpem9udGFsR3JpZExpbmVzKClcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZHJhd0RhdGFMaW5lcyhpKVxuICAgIGRyYXdEYXRhTGFiZWxzKGkpXG4gIH1cblxuICBkcmF3Q29sdW1uSGVhZGVycygpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9