let axoSideDonateVISBG = '#5463FF';
let axoSideDonateBORDER = 'rgb(220,220,220)';
let axoSideDonateColor = '#000';
let axoSideDonateBG = '#fff';
let axoSideDonateRight = '0';
let axoSideDonateBottom = '3rem';
const axoSideDonateBtn = document.createElement('a');
const axoSideDonate = document.createElement('div');
const axoSideDonateIcon = document.createElement('div');
const axoSideDonateImg = document.createElement('img');
const axoSideDonateContent = document.createElement('div');

function axoSideDonateChangeBottom(i) {
    axoSideDonateBottom = i;
    axoSideDonateBadgeExec();
}

axoSideDonateBadgeExec();

function axoSideDonateBadgeExec() {
    axoSideDonate.className = 'sideDonate';
axoSideDonateIcon.className = 'sideDonateIcon';
axoSideDonateBtn.href = 'https://patreon.com/axorax';
axoSideDonateBtn.target = '_blank';
axoSideDonateImg.style.height = '30px';
axoSideDonateImg.alt = 'Donate';
axoSideDonateIcon.style.height = '3.5rem';
axoSideDonateContent.style.cssText = `background:${axoSideDonateBG};border:1.5px solid ${axoSideDonateBORDER};border-left:none;border-right:none;padding:.4rem.5rem;color:${axoSideDonateColor};text-decoration:none;transform:translate(100%);white-space:nowrap;padding-top: 7px`;
axoSideDonate.style.cssText = `font-family: 'Roboto', sans-serif;z-index:99999999;display: flex;position: fixed;right: ${axoSideDonateRight};bottom: ${axoSideDonateBottom};height: 3.5rem;width: 3.5rem;cursor: pointer;`
axoSideDonateIcon.style.cssText = `display:flex;align-items:center;justify-content:center;border-top-left-radius:7px;border-bottom-left-radius:7px;width:3.5rem;height:3.5rem;background: ${axoSideDonateVISBG};position:fixed;right:0;`;
axoSideDonate.onmouseover = function() {
    axoSideDonate.style.width = 'max-content';
    axoSideDonateContent.style.transform = 'translate(0%)';
    axoSideDonateIcon.style.position = 'static';
}
axoSideDonate.onmouseout = function() {
    axoSideDonateContent.style.transform = 'translate(100%)';
    axoSideDonate.style.width = '3.5rem';
    axoSideDonateIcon.style.position = 'fixed';
}
axoSideDonateContent.className = 'sideDonateContent';
axoSideDonateImg.src = 'https://axorax.github.io/wp-content/images/heartOutline.svg';
axoSideDonateContent.innerText = 'support the creator \n by donating';

axoSideDonateBtn.appendChild(axoSideDonate);
axoSideDonate.appendChild(axoSideDonateIcon);
axoSideDonateIcon.appendChild(axoSideDonateImg);
axoSideDonate.appendChild(axoSideDonateContent);

document.body.appendChild(axoSideDonateBtn);
}
