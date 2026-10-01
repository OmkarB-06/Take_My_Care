Chart.defaults.color='#91A4BB';Chart.defaults.font.family='Inter';Chart.defaults.borderColor='rgba(145,164,187,.15)';
const O={responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}}};
const C={
 line:(id,l,d,c='#6366f1')=>new Chart($('#'+id),{type:'line',data:{labels:l,datasets:[{data:d,borderColor:c,backgroundColor:c+'33',fill:true,tension:.4,pointRadius:4}]},options:O}),
 bar:(id,l,d,c='#14b8a6')=>new Chart($('#'+id),{type:'bar',data:{labels:l,datasets:[{data:d,backgroundColor:c,borderRadius:8}]},options:O}),
 donut:(id,l,d)=>new Chart($('#'+id),{type:'doughnut',data:{labels:l,datasets:[{data:d,backgroundColor:['#10b981','#f59e0b','#ef4444'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{position:'bottom'}}}})
};
