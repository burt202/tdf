!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=0)}([function(t,e,o){t.exports=o(1)},function(t,e,o){o(2)()},function(t,e,o){o(3),t.exports=()=>{const t=document.getElementById("chart").getContext("2d"),e=["2017","2018","2019","2020","2021"],o=[{textColor:"white",lineColour:"black",points:[{text:"Team Sky",coords:[0,1]},{text:"Team Sky",coords:[1,4]},{text:"Team Sky",coords:[2,1]},{text:"Team Sky",coords:[3,2]},{text:"Team Sky",coords:[4,1]}]},{textColor:"white",lineColour:"rgb(200,0,0)",points:[{text:"BMC Racing",coords:[0,2]},{text:"BMC Racing",coords:[1,1]},{text:"BMC Racing",coords:[2,0]},{text:"BMC Racing",coords:[3,1]},{text:"BMC Racing",coords:[4,2]}]}],n=900/(e.length-1);function r(e){const r=o[e].points;t.beginPath();const l=r[0].coords[0]*n+100,c=90*r[0].coords[1]+100;t.moveTo(l,c);for(let l=0;l<r.length;l++){const c=r[l].coords;t.strokeStyle=o[e].lineColour,t.lineWidth=2;const i=c[0]*n+100,s=90*c[1]+100;t.lineTo(i,s),t.stroke()}t.closePath()}function l(e){const r=o[e].points;for(let u=0;u<r.length;u++){const a=r[u].text,d=r[u].coords,g=d[0]*n+100,x=90*d[1]+100;t.fillStyle=o[e].lineColour,l=g-75,c=x-20,(i=150)<2*(f=8)&&(f=i/2),(s=40)<2*f&&(f=s/2),t.beginPath(),t.moveTo(l+f,c),t.arcTo(l+i,c,l+i,c+s,f),t.arcTo(l+i,c+s,l,c+s,f),t.arcTo(l,c+s,l,c,f),t.arcTo(l,c,l+i,c,f),t.closePath(),t.fill(),t.font="16px serif",t.fillStyle=o[e].textColor,t.textAlign="center",t.fillText(a,g,x+5)}var l,c,i,s,f}t.canvas.width=1100,t.canvas.height=650;const c=function(t,e){let o=[];for(let n=0;n<t-1;n++){const t=(n+1)*e+100;o.push(t)}return[100,...o]}(e.length,n),i=function(t,e){let o=[];for(let n=0;n<t;n++){const r=e-(n+1)*(e/t)+100;o.push(r)}return[e+100,...o]}(5,450);!function(){for(let e=1;e<c.length-1;e++)t.strokeStyle="rgba(29, 210, 175,0.3)",t.lineWidth=1,t.moveTo(c[e],100),t.lineTo(c[e],550);t.stroke()}(),function(){for(let e=1;e<i.length-1;e++)t.strokeStyle="rgba(29, 210, 175,0.3)",t.lineWidth=1,t.moveTo(100,i[e]),t.lineTo(1e3,i[e]);t.stroke()}();for(let t=0;t<o.length;t++)r(t),l(t);!function(){t.font="16px serif",t.fillStyle="rgb(200,0,0)",t.textAlign="left";for(let o=0;o<e.length;o++){const r=80+o*n;t.fillText(e[o],r,40)}}()}},function(t,e,o){}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiaW5pdCIsImN0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiY29scyIsImxpbmVzIiwidGV4dENvbG9yIiwibGluZUNvbG91ciIsInBvaW50cyIsInRleHQiLCJjb29yZHMiLCJjb2x1bW5XaWR0aCIsImxlbmd0aCIsImRyYXdEYXRhTGluZXMiLCJsaW5lUG9pbnRzIiwiYmVnaW5QYXRoIiwibW92ZVRvWCIsIm1vdmVUb1kiLCJjaGFydEhlaWdodCIsIm1vdmVUbyIsImoiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImxpbmVUb1giLCJsaW5lVG9ZIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiZHJhd0RhdGFMYWJlbHMiLCJmaWxsU3R5bGUiLCJ4IiwieSIsIndpZHRoIiwicmFkaXVzIiwiaGVpZ2h0IiwiYXJjVG8iLCJmaWxsIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiY2FudmFzIiwiY2hhcnRXaWR0aCIsImNvbHVtbkNvb3JkcyIsIm5vT2ZDb2xzIiwiYXJyIiwiY29vcmQiLCJwdXNoIiwiZ2V0Q29sdW1uQ29vcmRzIiwicm93Q29vcmRzIiwibm9PZlJvd3MiLCJnZXRSb3dDb29yZHMiLCJkcmF3VmVydGljYWxHcmlkTGluZXMiLCJkcmF3SG9yaXpvbnRhbEdyaWRMaW5lcyIsInBhZGRpbmciLCJkcmF3Q29sdW1uSGVhZGVycyJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFzQkEsR0FBU0EsRUFBTUcsV0FBWSxPQUFPSCxFQUNoRixJQUFJSSxFQUFLWCxPQUFPWSxPQUFPLE1BR3ZCLEdBRkExQixFQUFvQmtCLEVBQUVPLEdBQ3RCWCxPQUFPQyxlQUFlVSxFQUFJLFVBQVcsQ0FBRVQsWUFBWSxFQUFNSyxNQUFPQSxJQUN0RCxFQUFQRSxHQUE0QixpQkFBVEYsRUFBbUIsSUFBSSxJQUFJTSxLQUFPTixFQUFPckIsRUFBb0JVLEVBQUVlLEVBQUlFLEVBQUssU0FBU0EsR0FBTyxPQUFPTixFQUFNTSxJQUFRQyxLQUFLLEtBQU1ELElBQzlJLE9BQU9GLEdBSVJ6QixFQUFvQjZCLEVBQUksU0FBUzFCLEdBQ2hDLElBQUlTLEVBQVNULEdBQVVBLEVBQU9xQixXQUM3QixXQUF3QixPQUFPckIsRUFBZ0IsU0FDL0MsV0FBOEIsT0FBT0EsR0FFdEMsT0FEQUgsRUFBb0JVLEVBQUVFLEVBQVEsSUFBS0EsR0FDNUJBLEdBSVJaLEVBQW9CYSxFQUFJLFNBQVNpQixFQUFRQyxHQUFZLE9BQU9qQixPQUFPa0IsVUFBVUMsZUFBZTFCLEtBQUt1QixFQUFRQyxJQUd6Ry9CLEVBQW9Ca0MsRUFBSSxJQUlqQmxDLEVBQW9CQSxFQUFvQm1DLEVBQUksRyxrRENsRnhDLEVBQVEsRUFFckJDLEksZ0JDRkEsRUFBUSxHQUVSakMsRUFBT0QsUUFBVSxLQUNmLE1BQU1tQyxFQUFNQyxTQUFTQyxlQUFlLFNBQVNDLFdBQVcsTUFRbERDLEVBQU8sQ0FBQyxPQUFRLE9BQVEsT0FBUSxPQUFRLFFBRXhDQyxFQUFRLENBQ1osQ0FDRUMsVUFBVyxRQUNYQyxXQUFZLFFBQ1pDLE9BQVEsQ0FDTixDQUFDQyxLQUFNLFdBQVlDLE9BQVEsQ0FBQyxFQUFHLElBQy9CLENBQUNELEtBQU0sV0FBWUMsT0FBUSxDQUFDLEVBQUcsSUFDL0IsQ0FBQ0QsS0FBTSxXQUFZQyxPQUFRLENBQUMsRUFBRyxJQUMvQixDQUFDRCxLQUFNLFdBQVlDLE9BQVEsQ0FBQyxFQUFHLElBQy9CLENBQUNELEtBQU0sV0FBWUMsT0FBUSxDQUFDLEVBQUcsTUFHbkMsQ0FDRUosVUFBVyxRQUNYQyxXQUFZLGVBQ1pDLE9BQVEsQ0FDTixDQUFDQyxLQUFNLGFBQWNDLE9BQVEsQ0FBQyxFQUFHLElBQ2pDLENBQUNELEtBQU0sYUFBY0MsT0FBUSxDQUFDLEVBQUcsSUFDakMsQ0FBQ0QsS0FBTSxhQUFjQyxPQUFRLENBQUMsRUFBRyxJQUNqQyxDQUFDRCxLQUFNLGFBQWNDLE9BQVEsQ0FBQyxFQUFHLElBQ2pDLENBQUNELEtBQU0sYUFBY0MsT0FBUSxDQUFDLEVBQUcsT0FLakNDLEVBakNhLEtBaUNlUCxFQUFLUSxPQUFTLEdBK0RoRCxTQUFTQyxFQUFjOUMsR0FDckIsTUFBTStDLEVBQWFULEVBQU10QyxHQUFHeUMsT0FFNUJSLEVBQUllLFlBRUosTUFBTUMsRUFBVUYsRUFBVyxHQUFHSixPQUFPLEdBQUtDLEVBbkc1QixJQW9HUk0sRUFwRVVDLEdBb0VBSixFQUFXLEdBQUdKLE9BQU8sR0FwR3ZCLElBcUdkVixFQUFJbUIsT0FBT0gsRUFBU0MsR0FFcEIsSUFBSyxJQUFJRyxFQUFJLEVBQUdBLEVBQUlOLEVBQVdGLE9BQVFRLElBQUssQ0FDMUMsTUFBTVYsRUFBU0ksRUFBV00sR0FBR1YsT0FFN0JWLEVBQUlxQixZQUFjaEIsRUFBTXRDLEdBQUd3QyxXQUMzQlAsRUFBSXNCLFVBQVksRUFFaEIsTUFBTUMsRUFBVWIsRUFBTyxHQUFLQyxFQTdHaEIsSUE4R05hLEVBOUVRTixHQThFRVIsRUFBTyxHQTlHWCxJQStHWlYsRUFBSXlCLE9BQU9GLEVBQVNDLEdBQ3BCeEIsRUFBSTBCLFNBR04xQixFQUFJMkIsWUFHTixTQUFTQyxFQUFlN0QsR0FDdEIsTUFBTStDLEVBQWFULEVBQU10QyxHQUFHeUMsT0FFNUIsSUFBSyxJQUFJWSxFQUFJLEVBQUdBLEVBQUlOLEVBQVdGLE9BQVFRLElBQUssQ0FDMUMsTUFBTVgsRUFBT0ssRUFBV00sR0FBR1gsS0FDckJDLEVBQVNJLEVBQVdNLEdBQUdWLE9BRXZCYSxFQUFVYixFQUFPLEdBQUtDLEVBN0hoQixJQThITmEsRUE5RlFOLEdBOEZFUixFQUFPLEdBOUhYLElBZ0laVixFQUFJNkIsVUFBWXhCLEVBQU10QyxHQUFHd0MsV0FyRUN1QixFQXVFTFAsRUFBVSxHQXZFRlEsRUF1RU1QLEVBQVUsSUF2RWJRLEVBdUVpQixLQXRFdkMsR0FEcUNDLEVBdUVXLEtBdEVwQ0EsRUFBU0QsRUFBUSxJQURBRSxFQXVFZSxJQXJFM0MsRUFBSUQsSUFBUUEsRUFBU0MsRUFBUyxHQUUzQ2xDLEVBQUllLFlBQ0pmLEVBQUltQixPQUFPVyxFQUFJRyxFQUFRRixHQUN2Qi9CLEVBQUltQyxNQUFNTCxFQUFJRSxFQUFPRCxFQUFHRCxFQUFJRSxFQUFPRCxFQUFJRyxFQUFRRCxHQUMvQ2pDLEVBQUltQyxNQUFNTCxFQUFJRSxFQUFPRCxFQUFJRyxFQUFRSixFQUFHQyxFQUFJRyxFQUFRRCxHQUNoRGpDLEVBQUltQyxNQUFNTCxFQUFHQyxFQUFJRyxFQUFRSixFQUFHQyxFQUFHRSxHQUMvQmpDLEVBQUltQyxNQUFNTCxFQUFHQyxFQUFHRCxFQUFJRSxFQUFPRCxFQUFHRSxHQUM5QmpDLEVBQUkyQixZQStERjNCLEVBQUlvQyxPQUNKcEMsRUFBSXFDLEtBQU8sYUFDWHJDLEVBQUk2QixVQUFZeEIsRUFBTXRDLEdBQUd1QyxVQUN6Qk4sRUFBSXNDLFVBQVksU0FDaEJ0QyxFQUFJdUMsU0FBUzlCLEVBQU1jLEVBQVNDLEVBQVUsR0E3RTFDLElBQThCTSxFQUFHQyxFQUFHQyxFQUFPRSxFQUFRRCxFQXpCbkRqQyxFQUFJd0MsT0FBT1IsTUFBUVMsS0FDbkJ6QyxFQUFJd0MsT0FBT04sT0FBU2hCLElBb0hwQixNQUFNd0IsRUFsSE4sU0FBeUJDLEVBQVVYLEdBQ2pDLElBQUlZLEVBQU0sR0FFVixJQUFLLElBQUk3RSxFQUFJLEVBQUdBLEVBQUk0RSxFQUFXLEVBQUc1RSxJQUFLLENBQ3JDLE1BQU04RSxHQUFTOUUsRUFBSSxHQUFLaUUsRUF6Q1osSUEwQ1pZLEVBQUlFLEtBQUtELEdBR1gsTUFBTyxDQUFDLE9BQWdCRCxHQTBHTEcsQ0FBZ0IzQyxFQUFLUSxPQUFRRCxHQUM1Q3FDLEVBeEdOLFNBQXNCQyxFQUFVZixHQUM5QixJQUFJVSxFQUFNLEdBRVYsSUFBSyxJQUFJN0UsRUFBSSxFQUFHQSxFQUFJa0YsRUFBVWxGLElBQUssQ0FDakMsTUFBTThFLEVBQVFYLEdBQVVuRSxFQUFJLElBQU1tRSxFQUFTZSxHQXBEL0IsSUFxRFpMLEVBQUlFLEtBQUtELEdBR1gsTUFBTyxDQUFDWCxFQXhETSxPQXdEZVUsR0FnR2JNLENBbkpELEVBTkcsTUF5RXBCLFdBQ0UsSUFBSyxJQUFJbkYsRUFBSSxFQUFHQSxFQUFJMkUsRUFBYTlCLE9BQVMsRUFBRzdDLElBQzNDaUMsRUFBSXFCLFlBekVlLHlCQTBFbkJyQixFQUFJc0IsVUFBWSxFQUNoQnRCLEVBQUltQixPQUFPdUIsRUFBYTNFLEdBNUVaLEtBNkVaaUMsRUFBSXlCLE9BQU9pQixFQUFhM0UsR0FBSW1ELEtBRzlCbEIsRUFBSTBCLFNBMEVOeUIsR0F2RUEsV0FDRSxJQUFLLElBQUlwRixFQUFJLEVBQUdBLEVBQUlpRixFQUFVcEMsT0FBUyxFQUFHN0MsSUFDeENpQyxFQUFJcUIsWUFwRmUseUJBcUZuQnJCLEVBQUlzQixVQUFZLEVBQ2hCdEIsRUFBSW1CLE9BdkZRLElBdUZRNkIsRUFBVWpGLElBQzlCaUMsRUFBSXlCLE9BQU9nQixJQUFzQk8sRUFBVWpGLElBRzdDaUMsRUFBSTBCLFNBZ0VOMEIsR0FFQSxJQUFLLElBQUlyRixFQUFJLEVBQUdBLEVBQUlzQyxFQUFNTyxPQUFRN0MsSUFDaEM4QyxFQUFjOUMsR0FDZDZELEVBQWU3RCxJQW5CakIsV0FDRWlDLEVBQUlxQyxLQUFPLGFBQ1hyQyxFQUFJNkIsVUE1SW9CLGVBNkl4QjdCLEVBQUlzQyxVQUFZLE9BRWhCLElBQUssSUFBSXZFLEVBQUksRUFBR0EsRUFBSXFDLEVBQUtRLE9BQVE3QyxJQUFLLENBQ3BDLE1BQU0rRCxFQUFJdUIsR0FBZXRGLEVBQUk0QyxFQUM3QlgsRUFBSXVDLFNBQVNuQyxFQUFLckMsR0FBSStELEVBQUcsS0FlN0J3QixLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBpbml0ID0gcmVxdWlyZShcIi4vbWFpblwiKVxuXG5pbml0KClcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21haW5cIiwgKCkgPT4ge1xuICAgIGNvbnN0IGluaXQgPSByZXF1aXJlKFwiLi9tYWluXCIpXG5cbiAgICBpbml0KClcbiAgfSlcbn1cbiIsInJlcXVpcmUoXCIuLi9zdHlsZS5jc3NcIilcblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnRcIikuZ2V0Q29udGV4dChcIjJkXCIpXG5cbiAgY29uc3QgY2hhcnRXaWR0aCA9IDkwMFxuICBjb25zdCBjaGFydEhlaWdodCA9IDQ1MFxuICBjb25zdCBwYWRkaW5nID0gMTAwXG4gIGNvbnN0IGdyaWRMaW5lQ29sb3VyID0gXCJyZ2JhKDI5LCAyMTAsIDE3NSwwLjMpXCJcbiAgY29uc3QgY29sdW1uVGl0bGVDb2xvdXIgPSBcInJnYigyMDAsMCwwKVwiXG5cbiAgY29uc3QgY29scyA9IFtcIjIwMTdcIiwgXCIyMDE4XCIsIFwiMjAxOVwiLCBcIjIwMjBcIiwgXCIyMDIxXCJdXG4gIGNvbnN0IHJvd0NvdW50ID0gNVxuICBjb25zdCBsaW5lcyA9IFtcbiAgICB7XG4gICAgICB0ZXh0Q29sb3I6IFwid2hpdGVcIixcbiAgICAgIGxpbmVDb2xvdXI6IFwiYmxhY2tcIixcbiAgICAgIHBvaW50czogW1xuICAgICAgICB7dGV4dDogXCJUZWFtIFNreVwiLCBjb29yZHM6IFswLCAxXX0sXG4gICAgICAgIHt0ZXh0OiBcIlRlYW0gU2t5XCIsIGNvb3JkczogWzEsIDRdfSxcbiAgICAgICAge3RleHQ6IFwiVGVhbSBTa3lcIiwgY29vcmRzOiBbMiwgMV19LFxuICAgICAgICB7dGV4dDogXCJUZWFtIFNreVwiLCBjb29yZHM6IFszLCAyXX0sXG4gICAgICAgIHt0ZXh0OiBcIlRlYW0gU2t5XCIsIGNvb3JkczogWzQsIDFdfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0Q29sb3I6IFwid2hpdGVcIixcbiAgICAgIGxpbmVDb2xvdXI6IFwicmdiKDIwMCwwLDApXCIsXG4gICAgICBwb2ludHM6IFtcbiAgICAgICAge3RleHQ6IFwiQk1DIFJhY2luZ1wiLCBjb29yZHM6IFswLCAyXX0sXG4gICAgICAgIHt0ZXh0OiBcIkJNQyBSYWNpbmdcIiwgY29vcmRzOiBbMSwgMV19LFxuICAgICAgICB7dGV4dDogXCJCTUMgUmFjaW5nXCIsIGNvb3JkczogWzIsIDBdfSxcbiAgICAgICAge3RleHQ6IFwiQk1DIFJhY2luZ1wiLCBjb29yZHM6IFszLCAxXX0sXG4gICAgICAgIHt0ZXh0OiBcIkJNQyBSYWNpbmdcIiwgY29vcmRzOiBbNCwgMl19LFxuICAgICAgXSxcbiAgICB9LFxuICBdXG5cbiAgY29uc3QgY29sdW1uV2lkdGggPSBjaGFydFdpZHRoIC8gKGNvbHMubGVuZ3RoIC0gMSlcbiAgY29uc3Qgcm93SGVpZ2h0ID0gY2hhcnRIZWlnaHQgLyByb3dDb3VudFxuXG4gIGN0eC5jYW52YXMud2lkdGggPSBjaGFydFdpZHRoICsgMiAqIHBhZGRpbmdcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBjaGFydEhlaWdodCArIDIgKiBwYWRkaW5nXG5cbiAgZnVuY3Rpb24gZ2V0Q29sdW1uQ29vcmRzKG5vT2ZDb2xzLCB3aWR0aCkge1xuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub09mQ29scyAtIDE7IGkrKykge1xuICAgICAgY29uc3QgY29vcmQgPSAoaSArIDEpICogd2lkdGggKyBwYWRkaW5nXG4gICAgICBhcnIucHVzaChjb29yZClcbiAgICB9XG5cbiAgICByZXR1cm4gWzAgKyBwYWRkaW5nLCAuLi5hcnJdXG4gIH1cblxuICBmdW5jdGlvbiBnZXRSb3dDb29yZHMobm9PZlJvd3MsIGhlaWdodCkge1xuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub09mUm93czsgaSsrKSB7XG4gICAgICBjb25zdCBjb29yZCA9IGhlaWdodCAtIChpICsgMSkgKiAoaGVpZ2h0IC8gbm9PZlJvd3MpICsgcGFkZGluZ1xuICAgICAgYXJyLnB1c2goY29vcmQpXG4gICAgfVxuXG4gICAgcmV0dXJuIFtoZWlnaHQgKyBwYWRkaW5nLCAuLi5hcnJdXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3Um91bmRlZFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpIHtcbiAgICBpZiAod2lkdGggPCAyICogcmFkaXVzKSByYWRpdXMgPSB3aWR0aCAvIDJcbiAgICBpZiAoaGVpZ2h0IDwgMiAqIHJhZGl1cykgcmFkaXVzID0gaGVpZ2h0IC8gMlxuXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KVxuICAgIGN0eC5hcmNUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIGhlaWdodCwgcmFkaXVzKVxuICAgIGN0eC5hcmNUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQsIHJhZGl1cylcbiAgICBjdHguYXJjVG8oeCwgeSArIGhlaWdodCwgeCwgeSwgcmFkaXVzKVxuICAgIGN0eC5hcmNUbyh4LCB5LCB4ICsgd2lkdGgsIHksIHJhZGl1cylcbiAgICBjdHguY2xvc2VQYXRoKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdWZXJ0aWNhbEdyaWRMaW5lcygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGNvbHVtbkNvb3Jkcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGdyaWRMaW5lQ29sb3VyXG4gICAgICBjdHgubGluZVdpZHRoID0gMVxuICAgICAgY3R4Lm1vdmVUbyhjb2x1bW5Db29yZHNbaV0sIHBhZGRpbmcpXG4gICAgICBjdHgubGluZVRvKGNvbHVtbkNvb3Jkc1tpXSwgY2hhcnRIZWlnaHQgKyBwYWRkaW5nKVxuICAgIH1cblxuICAgIGN0eC5zdHJva2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0hvcml6b250YWxHcmlkTGluZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3dDb29yZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBncmlkTGluZUNvbG91clxuICAgICAgY3R4LmxpbmVXaWR0aCA9IDFcbiAgICAgIGN0eC5tb3ZlVG8ocGFkZGluZywgcm93Q29vcmRzW2ldKVxuICAgICAgY3R4LmxpbmVUbyhjaGFydFdpZHRoICsgcGFkZGluZywgcm93Q29vcmRzW2ldKVxuICAgIH1cblxuICAgIGN0eC5zdHJva2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0RhdGFMaW5lcyhpKSB7XG4gICAgY29uc3QgbGluZVBvaW50cyA9IGxpbmVzW2ldLnBvaW50c1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpXG5cbiAgICBjb25zdCBtb3ZlVG9YID0gbGluZVBvaW50c1swXS5jb29yZHNbMF0gKiBjb2x1bW5XaWR0aCArIHBhZGRpbmdcbiAgICBjb25zdCBtb3ZlVG9ZID0gbGluZVBvaW50c1swXS5jb29yZHNbMV0gKiByb3dIZWlnaHQgKyBwYWRkaW5nXG4gICAgY3R4Lm1vdmVUbyhtb3ZlVG9YLCBtb3ZlVG9ZKVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5lUG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBjb29yZHMgPSBsaW5lUG9pbnRzW2pdLmNvb3Jkc1xuXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBsaW5lc1tpXS5saW5lQ29sb3VyXG4gICAgICBjdHgubGluZVdpZHRoID0gMlxuXG4gICAgICBjb25zdCBsaW5lVG9YID0gY29vcmRzWzBdICogY29sdW1uV2lkdGggKyBwYWRkaW5nXG4gICAgICBjb25zdCBsaW5lVG9ZID0gY29vcmRzWzFdICogcm93SGVpZ2h0ICsgcGFkZGluZ1xuICAgICAgY3R4LmxpbmVUbyhsaW5lVG9YLCBsaW5lVG9ZKVxuICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgY3R4LmNsb3NlUGF0aCgpXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3RGF0YUxhYmVscyhpKSB7XG4gICAgY29uc3QgbGluZVBvaW50cyA9IGxpbmVzW2ldLnBvaW50c1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5lUG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gbGluZVBvaW50c1tqXS50ZXh0XG4gICAgICBjb25zdCBjb29yZHMgPSBsaW5lUG9pbnRzW2pdLmNvb3Jkc1xuXG4gICAgICBjb25zdCBsaW5lVG9YID0gY29vcmRzWzBdICogY29sdW1uV2lkdGggKyBwYWRkaW5nXG4gICAgICBjb25zdCBsaW5lVG9ZID0gY29vcmRzWzFdICogcm93SGVpZ2h0ICsgcGFkZGluZ1xuXG4gICAgICBjdHguZmlsbFN0eWxlID0gbGluZXNbaV0ubGluZUNvbG91clxuXG4gICAgICBkcmF3Um91bmRlZFJlY3RhbmdsZShsaW5lVG9YIC0gNzUsIGxpbmVUb1kgLSAyMCwgMTUwLCA0MCwgOClcblxuICAgICAgY3R4LmZpbGwoKVxuICAgICAgY3R4LmZvbnQgPSBcIjE2cHggc2VyaWZcIlxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGxpbmVzW2ldLnRleHRDb2xvclxuICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCJcbiAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBsaW5lVG9YLCBsaW5lVG9ZICsgNSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3Q29sdW1uSGVhZGVycygpIHtcbiAgICBjdHguZm9udCA9IFwiMTZweCBzZXJpZlwiXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbHVtblRpdGxlQ29sb3VyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBwYWRkaW5nIC0gMjAgKyBpICogY29sdW1uV2lkdGhcbiAgICAgIGN0eC5maWxsVGV4dChjb2xzW2ldLCB4LCA0MClcbiAgICB9XG4gIH1cblxuICBjb25zdCBjb2x1bW5Db29yZHMgPSBnZXRDb2x1bW5Db29yZHMoY29scy5sZW5ndGgsIGNvbHVtbldpZHRoKVxuICBjb25zdCByb3dDb29yZHMgPSBnZXRSb3dDb29yZHMocm93Q291bnQsIGNoYXJ0SGVpZ2h0KVxuXG4gIGRyYXdWZXJ0aWNhbEdyaWRMaW5lcygpXG4gIGRyYXdIb3Jpem9udGFsR3JpZExpbmVzKClcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZHJhd0RhdGFMaW5lcyhpKVxuICAgIGRyYXdEYXRhTGFiZWxzKGkpXG4gIH1cblxuICBkcmF3Q29sdW1uSGVhZGVycygpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9