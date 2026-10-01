const $=s=>document.querySelector(s),BASE=document.body.dataset.base||'';
const S={g:(k,d)=>{try{const v=localStorage.getItem('tmc_'+k);return v===null?d:JSON.parse(v)}catch(e){return d}},s:(k,v)=>localStorage.setItem('tmc_'+k,JSON.stringify(v))};
const R={g:()=>S.g('req2',DB.req),s:v=>S.s('req2',v)},F={g:()=>S.g('fu2',DB.fu),s:v=>S.s('fu2',v)};
const pp=id=>DB.people.find(x=>x.id==id),pid0=()=>S.g('user','PF-1042'),OFF=()=>DB.officers.find(o=>o.id==S.g('user'))||DB.officers[0];
const hist=(id=pid0())=>S.g('hist_'+id,pp(id).h),W=(id=pid0())=>S.g('w_'+id,pp(id).w0);
const team=()=>DB.people.filter(p=>OFF().units.includes(p.u)),myReq=()=>R.g().filter(r=>OFF().units.includes(r.unit));
DB.people.forEach(p=>{const h=hist(p.id);p.risk=h[0].risk;p.w=W(p.id);p.last=h[0].d});
const setTheme=t=>{document.documentElement.dataset.theme=t;localStorage.setItem('tmc_theme',t)};
const toggleTheme=()=>setTheme(document.documentElement.dataset.theme=='dark'?'light':'dark');
const bd=s=>`<span class="badge ${s.toLowerCase()}">${s}</span>`;
const stat=(l,v,i)=>`<div class="card hv"><small>${l}</small><h2 style="margin-top:.3rem"><i class="fa-solid ${i}" style="color:var(--te);font-size:18px"></i> ${v}</h2></div>`;
const tbl=(h,r)=>`<div class=tw><table><tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>${r.map(x=>`<tr>${x.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
const toast=m=>{const t=document.createElement('div');t.className='toast';t.innerHTML='<i class="fa-solid fa-circle-check"></i> '+m;document.body.appendChild(t);setTimeout(()=>t.remove(),3200)};
const closeM=()=>$('.ov')&&$('.ov').remove();
const modal=h=>{closeM();const m=document.createElement('div');m.className='ov';m.innerHTML=`<div class=modal><button class=x onclick="closeM()">✕</button>${h}</div>`;m.onclick=e=>e.target==m&&closeM();document.body.appendChild(m)};
const tabs=(n,p)=>`<div><div class=tabs>${n.map((x,i)=>`<button class="${i?'':'on'}" onclick="tab(this,${i})">${x}</button>`).join('')}</div>${p.map((x,i)=>`<div class=pn ${i?'hidden':''}>${x}</div>`).join('')}</div>`;
const tab=(b,i)=>{b.parentNode.querySelectorAll('button').forEach((x,j)=>x.classList.toggle('on',i==j));b.parentNode.parentNode.querySelectorAll(':scope>.pn').forEach((p,j)=>p.hidden=i!=j)};
const logout=()=>{localStorage.removeItem('tmc_role');location.href=BASE+'login.html'};
const notifs=r=>r=='personnel'?[...R.g().filter(x=>x.pid==pid0()).map(x=>x.status=='PENDING'?'Your welfare request is pending review.':x.status=='ACCEPTED'?'Your welfare request was accepted.':'Your welfare request was updated: '+x.status),'Your check-in has been recorded.','Your follow-up is scheduled.']:[...myReq().filter(x=>x.status=='PENDING').map(x=>'New welfare request from '+x.by+'.'),'New high indication requires review.'];
function shell(role,active,title,body){
 if(S.g('role')!=role){location.href=BASE+'login.html';return}
 const P=[['dashboard','Overview','fa-house'],['profile','My Profile','fa-user'],['wellness','Wellness Check-in','fa-heart-pulse'],['risk','Risk & Progress','fa-chart-line'],['history','Q&A History','fa-clipboard-question'],['support','Welfare Requests','fa-hand-holding-heart']];
 const O=[['dashboard','Overview','fa-house'],['requests','Incoming Requests','fa-inbox'],['personnel','Personnel','fa-users'],['alerts','Risk Alerts','fa-triangle-exclamation'],['follow-up','Follow-ups','fa-calendar-check'],['analytics','Analytics','fa-chart-pie']];
 const ns=notifs(role);
 document.body.innerHTML=`<aside class=side id=sd><a class=logo href="${BASE}index.html"><i class="fa-solid fa-heart"></i> Take My Care</a>${(role=='personnel'?P:O).map(n=>`<a class="${n[0]==active?'on':''}" href="${BASE}${role}/${n[0]}.html"><i class="fa-solid ${n[2]}"></i>${n[1]}</a>`).join('')}<span style="flex:1"></span><a onclick="toggleTheme()"><i class="fa-solid fa-circle-half-stroke"></i>Dark / Light mode</a><a onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i>Logout</a></aside><main class=main><div class=top><div class=row><button class="btn menu" onclick="$('#sd').classList.toggle('open')"><i class="fa-solid fa-bars"></i></button><h1>${title}</h1></div><div class=row style="position:relative"><button class=btn onclick="$('#np').classList.toggle('show')"><i class="fa-solid fa-bell"></i> ${ns.length}</button><div id=np class=np>${ns.map(n=>`<p>${n}</p>`).join('')}</div><div class=av>${(S.g('name')||'?')[0]}</div></div></div>${body}<p class="mu disc">This prototype is for welfare support and demonstration purposes. AI-assisted indicators are not medical diagnoses.</p></main>`;
}
