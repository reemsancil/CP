const lessons = {
  supplies: {label:'School supplies', items:[
    ['pen','🖊️'],['ruler','📏'],['sharpener','▰'],['school bag','🎒'],['coloring pencil','🖍️'],['folder','📁'],['pencil','✏️'],['eraser','▱'],['glue stick','🧴'],['pencil case','👝'],['crayon','🖍️'],['scissors','✂️']]},
  routine: {label:'My daily routine', items:[
    ['I wake up.','🌅'],['I wash my face.','💧'],['I brush my teeth.','🪥'],['I get dressed.','👕'],['I have breakfast.','🥣'],['I go to school.','🏫'],['I come back home.','🏠'],['I have lunch.','🥪'],['I do my homework.','📚'],['I play with my friends.','⚽'],['I take a shower.','🚿'],['I have dinner.','🍽️'],['I go to bed.','🛏️'],['I comb my hair.','💇']]}
};
const dialog=document.querySelector('#gameDialog'),board=document.querySelector('#board'),feedback=document.querySelector('#feedback'),next=document.querySelector('#nextRound');
let attempts=0,firstTry=0,roundWrong=false,completed=false;
let mode,lessonKey,items,selection=[],matched=0,locked=false,timer,round=0,missing,phase;
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function tile(html,action,cls=''){const b=document.createElement('button');b.type='button';b.className='tile '+cls;b.innerHTML=html;b.addEventListener('click',()=>action(b));board.append(b);return b;}
function picture(item){return `<span class="symbol" aria-hidden="true">${item[1]}</span><span class="picture-word">${item[0]}</span>`;}
function start(){attempts=0;firstTry=0;roundWrong=false;completed=false;CompletionResult.reset();document.querySelector("#instructions").hidden=false;clearTimeout(timer);selection=[];matched=0;locked=false;round=0;feedback.textContent='';board.replaceChildren();next.hidden=true;
 const key=lessonKey;items=shuffle(lessons[key].items).slice(0,4);
 document.querySelector('#gameTitle').textContent=mode==='grammar'?'There is / There are':lessons[key].label;
 document.querySelector('#instructions').textContent={memory:'Flip two cards to find a pair.',matching:'Tap a picture, then its English word.',missing:'Look at the pictures. When you’re ready, hide one!',grammar:'Choose the sentence for one or several objects.'}[mode];
 if(mode==='memory'||mode==='matching')pairs();else if(mode==='missing')look();else grammar();
}
function pairs(){let deck=shuffle(items.flatMap((item,id)=>[{item,id,kind:'picture'},{item,id,kind:mode==='memory'?'picture':'word'}]));
 for(const card of deck){const face=card.kind==='picture'?picture(card.item):`<span>${card.item[0]}</span>`;
 const b=tile(mode==='memory'?'★':face,()=>choose(b,card,face),card.kind==='word'?'word':'');b.setAttribute('aria-label',mode==='memory'?'Hidden card':card.item[0]);}
}
function choose(b,card,face){if(locked||b.disabled||selection.some(s=>s.b===b))return;
 if(mode==='matching'&&selection.length&&selection[0].card.kind===card.kind){selection[0].b.classList.remove('selected');selection=[];}
 b.innerHTML=face;b.setAttribute('aria-label',card.item[0]);b.classList.add('selected');selection.push({b,card});if(selection.length<2)return;attempts++;
 if(selection[0].card.id===card.id){selection.forEach(s=>{s.b.classList.remove('selected');s.b.classList.add('matched');s.b.disabled=true;});selection=[];matched++;feedback.textContent=matched===4?'🌟 All pairs found! Well done!':'Great match!';if(matched===4)finish();}
 else{locked=true;feedback.textContent='Try again!';timer=setTimeout(()=>{selection.forEach(s=>{s.b.classList.remove('selected');if(mode==='memory'){s.b.textContent='★';s.b.setAttribute('aria-label','Hidden card');}});selection=[];locked=false;},1300);}}
function look(){roundWrong=false;board.replaceChildren();feedback.textContent='';phase='look';items.forEach(i=>tile(picture(i),()=>{}).disabled=true);next.textContent='Hide a picture →';next.hidden=false;}
function hide(){missing=items[round];board.replaceChildren();items.forEach(i=>tile(i===missing?'❔':picture(i),()=>{}).disabled=true);const choices=document.createElement('div');choices.className='answer-row';board.append(choices);shuffle(items).forEach(i=>{const b=document.createElement('button');b.className='answer';b.innerHTML=`${i[0]}`;choices.append(b);b.onclick=()=>{attempts++;if(i!==missing){roundWrong=true;feedback.textContent='Try again!';return;}if(!roundWrong)firstTry++;choices.querySelectorAll('button').forEach(x=>x.disabled=true);feedback.textContent=`🌟 ${missing[0]}!`;phase='solved';if(round===3){finish();return;}next.textContent='Next round →';next.hidden=false;};});phase='guess';next.hidden=true;}
const grammarItems=[['pencil','pencils','✏️',1],['ruler','rulers','📏',2],['sharpener','sharpeners','▰',4],['pencil','pencils','✏️',3]];
function grammar(){
 roundWrong=false;board.replaceChildren();next.hidden=true;
 const [one,many,icon,n]=grammarItems[round];
 const prompt=document.createElement('div');prompt.className='grammar-prompt';
 prompt.innerHTML=`<div aria-hidden="true">${Array(n).fill(icon).join(' ')}</div><p>${n} ${n===1?one:many}</p>`;board.append(prompt);
 ['There is','There are'].forEach(choice=>{
  const ending=n===1?`a ${one}.`:`${n} ${many}.`;
  tile(`${choice} ${ending}`,b=>{
   attempts++;if(choice!==(n===1?'There is':'There are')){roundWrong=true;feedback.textContent='Try again! One object: There is. More than one: There are.';return;}
   if(!roundWrong)firstTry++;board.querySelectorAll('button').forEach(x=>x.disabled=true);b.classList.add('matched');
   feedback.textContent=`🌟 ${choice} ${ending}`;phase='grammar';next.hidden=false;
   if(round===3){finish();return;}next.textContent='Next →';
  },'word');
 });
}
next.onclick=()=>{if(mode==='grammar'){if(round===3)start();else{round++;feedback.textContent='';grammar();}}else if(phase==='look')hide();else{if(round===3)start();else{round++;look();}}};
document.querySelectorAll('[data-game]').forEach(b=>b.onclick=()=>{mode=b.dataset.game;lessonKey=b.dataset.lesson||'supplies';start();dialog.showModal();});
document.querySelector('#closeGame').onclick=()=>dialog.close();dialog.addEventListener('close',()=>{clearTimeout(timer);CompletionResult.reset();});document.querySelector('#restart').onclick=start;const vocab=document.querySelector('#vocabulary');
Object.values(lessons).forEach(lesson=>{
 const section=document.createElement('section');const title=document.createElement('h3');title.textContent=lesson.label;section.append(title);
 const list=document.createElement('ul');list.className='word-guide';
 lesson.items.forEach(([en,icon])=>{const row=document.createElement('li');row.textContent=`${icon} ${en}`;list.append(row);});
 section.append(list);vocab.append(section);
});

function finish(){
 completed=true;next.hidden=true;document.querySelector('#instructions').hidden=true;
 const summary=mode==='memory'?`You found all 4 pairs in ${attempts} turns.`:mode==='matching'?`You matched all 4 pairs in ${attempts} attempts.`:`You completed all 4 rounds. First-try answers: ${firstTry} / 4.`;
 document.querySelector('#resultSummary').textContent=summary;
 CompletionResult.show(document.querySelector('#gameTitle').textContent,{memory:'Picture pairs',matching:'Match the words',missing:'What’s missing?',grammar:'Choose the sentence'}[mode],4,4);
 document.querySelector('#studentName').focus();
}
