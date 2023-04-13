// 주문영역 상품 이미지 view (작은 이미지 클릭 시 큰 이미지로 변경)
const big = document.querySelector('#order .big img')
const thum = document.querySelectorAll('#order .thum a')
console.log(thum, big)

thum.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()//href 새로고침 기능 막기 
        // console.log(index)
        big.src = `./images/product_0${index+1}.jpg`
    })
})



// 주문영역 상품 옵션 선택
const brands = document.querySelector('#order #brands')
const galaxy = document.querySelector('#order #galaxy_model')
const iphone = document.querySelector('#order #iphone_model')
console.log(brands, galaxy, iphone)
iphone.style.display = 'none' // 아이폰 숨기기(초기값)
galaxy.disabled = true // 비활성화(초기값)

brands.addEventListener('change',()=>{
    if(brands.options[2].selected == true){ // 아이폰
        brands_dis(iphone,false)
    }else if(brands.options[1].selected == true){ // 갤럭시
        brands_dis(galaxy,false)
    }else { // 필수 옵션 안내 (위 조건 아이폰, 갤럭시가 모두 아닌 경우)
        brands_dis(galaxy, true)
        galaxy.options[0].selected = true
    }
})

function brands_dis(target, boolean){
    iphone.style.display = 'none'
    galaxy.style.display = 'none'
    target.style.display = 'block'
    target.disabled = boolean
}

//기종 선택 시 주문영역에 기종명 출력하기 
const order_model = document.querySelector('.order_product .model')
const galaxy_op = document.querySelectorAll('#galaxy_model option')
const iphone_op = document.querySelectorAll('#iphone_model option')
console.log(order_model, galaxy_op, iphone_op)

// 갤럭시 기종 출력
galaxy.addEventListener('change',()=>{
    let galaxy_index = galaxy.selectedIndex
    console.log(galaxy_op[galaxy_index])
    order_model.appendChild(galaxy_op[galaxy_index])
})

// 아이폰 기종 출력 



console.log('----------------------------------------')
// 3
// input 수량을 올렸을때 총합 가격도 올라가도록 
const num = document.querySelector('#order_num')
const total = document.querySelector('em span')
let price = 8900
console.log(num, total, price)

num.addEventListener('change',()=>{
    // console.log(num.value)
    if(num.value>0 && num.value<1000){
        total.innerHTML = `${(num.value*price).toLocaleString('ko-kr')}`
    }else if(999<num.value){
        window.alert('최대입니다')
        num.value = 999
    }
    else {
        window.alert('최소 주문 수량입니다. 1개 이상 구매하세요 >_<')
        num.value = 1
    }
})

console.log('----------------------------------------')
//취소 버튼을 클릭 했을때 수량이 다시 1로 변경되도록 
const cancel = document.querySelector('#cancel img')
console.log(cancel)

cancel.addEventListener('click',()=>{
    num.value = 1
    total.innerHTML = `${price.toLocaleString('ko-kr')}`
})

