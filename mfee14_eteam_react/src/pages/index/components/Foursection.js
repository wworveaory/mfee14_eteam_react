import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import '.././index.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import coffeebean1 from '../img/index/generalproduct/20210514120127.jpg'
import coffeebean2 from '../img/index/generalproduct/20210514120142.jpg'
import coffeebean3 from '../img/index/generalproduct/20210514120223.jpg'
import coffeebean4 from '../img/index/generalproduct/20210514120256.jpg'


// import phoneherrosection from '../img/phone-herrosection.jpg'

function Foursection() {
  const [users, setUsers] = useState([])
  const [general, setgeneral] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  async function getUsersFromServer() {
    // 開啟載入指示
    setDataLoading(true)
    // 連接的伺服器資料網址
    const url = 'http://localhost:7000/home/read'
    // 注意header資料格式要設定，伺服器才知道是json格式
    //request代表是要跟伺服器要求
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    //29.設定檔頭為json
    //27~33.先告訴伺服器說我等傳過來是json
    //37.用await等伺服器做fetch,fetch回來接收到response
    //39.解出這個json
    const response = await fetch(request)
    const data = await response.json()
    // const homedata = data[0] //data的第幾筆資料
    // // console.log(homedata)
    // 設定資料
    setUsers(data)
    // // console.log(setUsers(data))
    // console.log(data)
    // console.log(users)
  }

  //////////////一般商品
  async function generalServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:7000/home/general'
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    setgeneral(data)
  }

  // // 一開始就會開始載入資料
  useEffect(() => {
    // taste()  //假如這是新增的async function taste()
    getUsersFromServer()
  }, [])
  // // 一開始就會開始載入資料
  useEffect(() => {
    generalServer()
  }, [])
  ///////滑鼠hover滑過去title底線會動////////////
  useEffect(() => {
    $('.about-title').on('click mouseenter mouseleave', function () {
      $('.index-border-bottom-blue')
        .css('width', '110%')
        .css('transition', '1.5s')
    })
  }, [])
  /////////////////////123123123123
  useEffect(() => {
    $('.index-hot-product-1').click(function () {
      $('.index-hot-product-1').toggleClass('active')
    })
  }, [])
  useEffect(() => {
    $('.index-hot-product-2').click(function () {
      $('.index-hot-product-2').toggleClass('active')
    })
  }, [])

  useEffect(() => {
    $('.index-hot-product-3').click(function () {
      $('.index-hot-product-3').toggleClass('active')
    })
  }, [])

  useEffect(() => {
    $('.index-hot-product-4').click(function () {
      $('.index-hot-product-4').toggleClass('active')
    })
  }, [])

  ////////////hot的資訊滑鼠hover圖片放大/////////////  ss
  useEffect(() => {
    // 1
    $('.index-newproduct-hot-1').on(' mouseenter ', function () {
      $('.index-newproduct-hot-1')
        .css('Transform', `scale(${1.5})`)
        .css('transition', '1s')
    })
    $('.index-newproduct-hot-1').on('mouseleave', function () {
      $('.index-newproduct-hot-1')
        .css('Transform', `scale(${1})`)
        .css('transition', '1s')
    })
    // 2/
    $('.index-newproduct-hot-2').on(' mouseenter ', function () {
      $('.index-newproduct-hot-2')
        .css('Transform', `scale(${1.5})`)
        .css('transition', '1s')
    })
    $('.index-newproduct-hot-2').on('mouseleave', function () {
      $('.index-newproduct-hot-2')
        .css('Transform', `scale(${1})`)
        .css('transition', '1s')
    })

    // 3/
    $('.index-newproduct-hot-3').on(' mouseenter ', function () {
      $('.index-newproduct-hot-3')
        .css('Transform', `scale(${1.5})`)
        .css('transition', '1s')
    })
    $('.index-newproduct-hot-3').on('mouseleave', function () {
      $('.index-newproduct-hot-3')
        .css('Transform', `scale(${1})`)
        .css('transition', '1s')
    })

    // //4 /
    $('.index-newproduct-hot-4').on(' mouseenter ', function () {
      $('.index-newproduct-hot-4')
        .css('Transform', `scale(${1.5})`)
        .css('transition', '1s')
    })
    $('.index-newproduct-hot-4').on('mouseleave', function () {
      $('.index-newproduct-hot-4')
        .css('Transform', `scale(${1})`)
        .css('transition', '1s')
    })
  }, [])
  ///////滑鼠hover滑過去title底線會動////////////
  useEffect(() => {
    $('.about-title').on(' mouseenter ', function () {
      $('.index-border-bottom-blue')
        .css('width', '110%')
        .css('transition', '1.5s')
    })
  }, [])
  useEffect(() => {
    $('.about-title').on('mouseleave', function () {
      $('.index-border-bottom-blue')
        .css('width', '5%')
        .css('transition', '1.5s')
    })
  }, [])
  //////
  //
  return (
    <>
      <div className="index-best-selling-group">
        <div className="about-title ">
          Coffee products
          <div className="index-border-bottom-blue"> </div>
        </div>

        <Link to="#/" className=" index-button-blue-bg ">
          ALL
        </Link>
      </div>
      <div className="index-best-selling-item">
        <div className="index-box2">
          <div className="index-box2-group">
            <div className="index-box2-pic">
              {/* <img
                className="index-newproduct-hot-1"
                src={`http://localhost:7000/img/index/generalproduct/${
                  general.length > 0 && general[0].iImg
                }`}
                alt="123"
              /> */}
              <img className="index-newproduct-hot-1" src={coffeebean1} alt=" coffeebean1" />
            </div>
            <div className="index-item-1">
              <div className="index-item-2">
                <div className="index-product-card-text1">
                  {/* {general.length > 0 && general[0].iName} */}
                  日安吾愛 Bonjour, mon am
                </div>
                <div className="index-hot-product-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 455.52"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '.cls-1{}',
                        }}
                      />
                    </defs>
                    <g id="圖層_2" data-name="圖層 2">
                      <g id="圖層_1-2" data-name="圖層 1">
                        <path d="M471.38,44.58C444.88,15.83,408.51,0,369,0c-29.55,0-56.62,9.34-80.45,27.77a164.79,164.79,0,0,0-32.52,34,164.31,164.31,0,0,0-32.53-34C199.65,9.34,172.58,0,143,0,103.49,0,67.12,15.83,40.61,44.58,14.43,73,0,111.8,0,153.87c0,43.3,16.14,82.94,50.78,124.74C81.77,316,126.32,354,177.9,397.93c17.61,15,37.58,32,58.31,50.15a30.06,30.06,0,0,0,39.58,0c20.73-18.13,40.7-35.16,58.32-50.18,51.58-44,96.12-81.9,127.11-119.3C495.87,236.81,512,197.17,512,153.87,512,111.8,497.57,73,471.38,44.58Z" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="index-product-card-text2  index-letter-1-height-20">
                {/* {general.length > 0 && general[0].iDiscr} */}
                它的酸度低，醇厚甘甜即使是平價的初階咖啡機，也能調製出迷人的幸福口感，適合辦公室沖煮，或喜歡極簡生活的咖啡人使用。
              </div>
              <div className="index-product-card-text3">
                {/* 特價:{general.length > 0 && general[0].iPrice}元 */}
                特價:760元
              </div>
              <Link to="#/" className="index-card-button">
                購買
              </Link>
            </div>
          </div>
        </div>
        <div className="index-box3">
          <div className="index-box2-pic">
            {/* <img
              className="index-newproduct-hot-2"
              src={`http://localhost:7000/img/index/generalproduct/${
                general.length > 0 && general[1].iImg
              }`}
              alt="123"
            /> */}
            <img className="index-newproduct-hot-2" src={coffeebean2} alt=" coffeebean2" />
          </div>
          <div className="index-item-1">
            <div className="index-item-2">
              <div className="index-product-card-text1">
                {general.length > 0 && general[1].iName}
              </div>
              <div className="index-hot-product-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 455.52"
                >
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: '.cls-1{}',
                      }}
                    />
                  </defs>
                  <g id="圖層_2" data-name="圖層 2">
                    <g id="圖層_1-2" data-name="圖層 1">
                      <path d="M471.38,44.58C444.88,15.83,408.51,0,369,0c-29.55,0-56.62,9.34-80.45,27.77a164.79,164.79,0,0,0-32.52,34,164.31,164.31,0,0,0-32.53-34C199.65,9.34,172.58,0,143,0,103.49,0,67.12,15.83,40.61,44.58,14.43,73,0,111.8,0,153.87c0,43.3,16.14,82.94,50.78,124.74C81.77,316,126.32,354,177.9,397.93c17.61,15,37.58,32,58.31,50.15a30.06,30.06,0,0,0,39.58,0c20.73-18.13,40.7-35.16,58.32-50.18,51.58-44,96.12-81.9,127.11-119.3C495.87,236.81,512,197.17,512,153.87,512,111.8,497.57,73,471.38,44.58Z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="index-product-card-text2  index-letter-1-height-20">
              {/* {general.length > 0 && general[1].iDiscr} */}
              以希臘神話中自由酒神為靈感，屬深焙咖啡豆。濃重狂放的口感伴隨著濃的香料香氣，在香醇中帶著極具個性的焦糖甜味。
            </div>
            <div className="index-product-card-text3">
              {/* 特價:{general.length > 0 && general[1].iPrice}元 */}
              特價:560元
            </div>
            <Link to="#/" className="index-card-button">
              購買
            </Link>
          </div>
        </div>
        <div className="index-box4">
          <div className="aaa">
            <div className="index-box2-pic">
              {/* <img
                className="index-newproduct-hot-3"
                src={`http://localhost:7000/img/index/generalproduct/${
                  general.length > 0 && general[2].iImg
                }`}
                alt="123"
              /> */}
              <img className="index-newproduct-hot-3" src={coffeebean3} alt=" coffeebean3" />
            </div>
            <div className="index-item-1">
              <div className="index-item-2">
                <div className="index-product-card-text1">
                  {/* {general.length > 0 && general[2].iName} */}
                  古典藍調Classic Blue
                </div>
                <div className="index-hot-product-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 455.52"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '.cls-1{}',
                        }}
                      />
                    </defs>
                    <g id="圖層_2" data-name="圖層 2">
                      <g id="圖層_1-2" data-name="圖層 1">
                        <path d="M471.38,44.58C444.88,15.83,408.51,0,369,0c-29.55,0-56.62,9.34-80.45,27.77a164.79,164.79,0,0,0-32.52,34,164.31,164.31,0,0,0-32.53-34C199.65,9.34,172.58,0,143,0,103.49,0,67.12,15.83,40.61,44.58,14.43,73,0,111.8,0,153.87c0,43.3,16.14,82.94,50.78,124.74C81.77,316,126.32,354,177.9,397.93c17.61,15,37.58,32,58.31,50.15a30.06,30.06,0,0,0,39.58,0c20.73-18.13,40.7-35.16,58.32-50.18,51.58-44,96.12-81.9,127.11-119.3C495.87,236.81,512,197.17,512,153.87,512,111.8,497.57,73,471.38,44.58Z" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="index-product-card-text2  index-letter-1-height-20">
                {/* {general.length > 0 && general[2].iDiscr} */}
                發想於藍調名曲Back Water Blues口感豐富的配方。就像擁有自由本質的藍調，保有傳統風味與層次感，在均衡的口感中帶著多元的特性。
              </div>
              <div className="index-product-card-text3">
                {/* 特價:{general.length > 0 && general[1].iPrice}元 */}
                特價:480元
              </div>
              <Link to="#/" className="index-card-button">
                購買
              </Link>
            </div>
          </div>
        </div>
        <div className="index-box5">
          <div className="index-box2-pic">
            {/* <img
              className="index-newproduct-hot-4"
              src={`http://localhost:3000/img/index/generalproduct/${
                general.length > 0 && general[3].iImg
              }`}
              alt="123"
            /> */}
            <img className="index-newproduct-hot-4" src={coffeebean4} alt=" coffeebean4" />
          </div>
          <div className="index-item-1">
            <div className="index-item-2">
              <div className="index-product-card-text1">
                {/* {general.length > 0 && general[3].iName} */}
                佛朗明哥 Flamenco
              </div>
              <div className="index-hot-product-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 455.52"
                >
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: '.cls-1{}',
                      }}
                    />
                  </defs>
                  <g id="圖層_2" data-name="圖層 2">
                    <g id="圖層_1-2" data-name="圖層 1">
                      <path d="M471.38,44.58C444.88,15.83,408.51,0,369,0c-29.55,0-56.62,9.34-80.45,27.77a164.79,164.79,0,0,0-32.52,34,164.31,164.31,0,0,0-32.53-34C199.65,9.34,172.58,0,143,0,103.49,0,67.12,15.83,40.61,44.58,14.43,73,0,111.8,0,153.87c0,43.3,16.14,82.94,50.78,124.74C81.77,316,126.32,354,177.9,397.93c17.61,15,37.58,32,58.31,50.15a30.06,30.06,0,0,0,39.58,0c20.73-18.13,40.7-35.16,58.32-50.18,51.58-44,96.12-81.9,127.11-119.3C495.87,236.81,512,197.17,512,153.87,512,111.8,497.57,73,471.38,44.58Z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="index-product-card-text2  index-letter-1-height-20">
              {/* {general.length > 0 && general[3].iDiscr} */}
              源自西班牙的佛朗明哥節奏強烈，在火熱的氣氛下呈現無比的生命力。此款同名咖啡勁道渾厚，醇中帶甘口味接受度極高!
            </div>
            <div className="index-product-card-text3">
              {/* 特價:{general.length > 0 && general[3].iPrice}元 */}
              特價:350元

            </div>
            <Link to="#/" className="index-card-button">
              購買
            </Link>
          </div>
        </div>
      </div>
      <div className="index-four-rectangle"></div>
    </>
  )
}

export default Foursection
