const topL = document.querySelector( '#tl' );
const topR = document.querySelector( '#tr' );
const botL = document.querySelector( '#bl' );
const botR = document.querySelector( '#br' );
const topLInp = document.querySelector( '#tlv' );
const topRInp = document.querySelector( '#trv' );
const botLInp = document.querySelector( '#blv' );
const botRInp = document.querySelector( '#brv' );
const block = document.querySelector( '.block' );
const inputsRange = document.querySelectorAll('.input-range');
function fun1() {
	topLInp.value = topL.value
	topRInp.value = topR.value
	botLInp.value = botL.value
	botRInp.value = botR.value

	block.style.borderRadius = `${topL.value}px ${topR.value}px ${botL.value}px ${botR.value}px`
}
inputsRange.forEach(i => {
	i.addEventListener('input', fun1)
})