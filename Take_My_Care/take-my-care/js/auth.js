let LR='personnel';
const ACC=()=>LR=='officer'?DB.officers:DB.people;
const chips=()=>ACC().map(a=>`<span style="cursor:pointer" onclick="$('#u').value='${a.n}'">${a.n}</span>`).join('');
function loginPage(){
 document.body.innerHTML=`<div class=login><div class=card><a href="index.html" class="row" style="font:800 20px Inter;margin-bottom:1rem"><i class="fa-solid fa-heart" style="color:var(--in)"></i> Take My Care</a><h2>Welcome back</h2><p class=mu>Choose your portal to continue.</p><div class=tabs><button class=on onclick="setRole('personnel',this)">Personnel</button><button onclick="setRole('officer',this)">Welfare Officer</button></div><label>Username / Personnel ID<input id=u value="Aarav Sharma"></label><label>Password<input id=p type=password value="demo123"></label><button class="btn p" style="width:100%;justify-content:center" onclick="signIn()">Sign In</button><div class="row sp" style="margin-top:1rem"><a class=mu onclick="toast('Demo mode: password is demo123')">Forgot Password?</a><a class=mu onclick="toast('Demo access: pick a demo account below')">Create Account</a></div><p class=mu style="font-size:12px;margin-top:1rem">Demo accounts (password demo123). Tap to fill:</p><div class=chips id=ch style="margin-top:.5rem">${chips()}</div></div></div>`;
}
function setRole(r,b){LR=r;b.parentNode.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x==b));$('#u').value=ACC()[0].n;$('#p').value='demo123';$('#ch').innerHTML=chips()}
function signIn(){
 const u=$('#u').value.trim().toLowerCase(),a=ACC().find(x=>[x.n,x.id,x.un].some(v=>v.toLowerCase()==u));
 if(a&&$('#p').value=='demo123'){S.s('role',LR);S.s('user',a.id);S.s('name',a.n);location.href=LR+'/dashboard.html'}
 else{toast('Invalid credentials. Tap a demo account below and use password demo123.');$('.toast i').className='fa-solid fa-circle-exclamation'}
}
