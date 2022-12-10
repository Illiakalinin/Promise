"use strict";

// fetch(
//   "https://api.open-meteo.com/v1/forecast?latitude=47.84&longitude=35.23&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FBerlin&start_date=2022-12-15&end_date=2022-12-15"
// )
//   .then((response) => response.json())
//   .then((data) => renderWeather(data))
//   .catch((err) => console.log(err));

// // підвантажити дані на сьогодні і вивести їх на сторінку

// function renderWeather(weather) {
//   console.log(
//     "weather.daily.temperature_2m_max :>> ",
//     weather.daily.temperature_2m_max
//   );
//   console.log(
//     "weather.daily.temperature_2m_min :>> ",
//     weather.daily.temperature_2m_min
//   );
//   console.log("weather.rain_sum :>> ", weather.rain_sum);
//   const rootDiv = document.getElementById("root");

//   const maxTempEl = document.createElement("div");
//   const minTempEl = document.createElement("div");

//   rootDiv.append(minTempEl, maxTempEl);

//   minTempEl.textContent = weather.daily.temperature_2m_min;
//   minTempEl.style.color = temperatureColor(weather.daily.temperature_2m_min);

//   maxTempEl.textContent = weather.daily.temperature_2m_max;
//   maxTempEl.style.color = temperatureColor(weather.daily.temperature_2m_max);
// }

// function temperatureColor(t) {
//   return t < 0 ? "blue" : t > 0 ? "green" : "black";
// }

//  promise state:
// 1 pending.

// 2.1 fullfield - result - then(result=>{})
// 2.2 rejected  - error  - catch(error=>{})
//                          finally

const promise = new Promise((resolve, reject) => {
  resolve(5);
  reject(new Error("error!!!"));
});

promise
  .then((data) => console.log("data :>> ", data))
  .catch((e) => console.log("e :>>", e));

promise.then(
  (data) => console.log("data :>> ", data),
  (e) => console.log("e :>>", e)
);

const shredCat = new Promise((res, rej) => {
  if (Math.random() > 0.5) {
    res("Your cat is alive!");
  } else {
    rej(new Error("Your cat is unlucky((("));
  }
});

shredCat
  .then((data) => console.log("data :>>", data))
  .catch((e) => console.log("e :>> ", e));

// промісифікувати  setTimeout
// setTimeout(cb,1000)
// delay(1000).then()

function delay(ms) {
  return new Promise((res, rej) => {
    if (ms < 0) {
      rej(new Error("delay must be positive number"));
    }
    setTimeout(res, ms);
  });
}

setTimeout(() => console.log("1s was passed from timeout"), 1000);
delay(1000)
  .then(() => console.log("1s was passed"))
  .catch((e) => console.log("e :>> ", e));

// загрузка изображения

const src = "https://klike.net/uploads/posts/2019-01/1547365376_1.jpg";

// loadImage(src);

// function loadImage(src) {
//   const img = document.createElement("img");
//   img.src = src;
//   img.onload = function (e) {
//     document.body.append(img);
//   };
//   img.onerror = function () {
//     img.src =
//       "https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png";
//   };
// }

loadImage(src)
  .then((img) => {
    document.body.append(img);
  })
  .catch((img) => {
    img.src =
      "https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png";
  });
function loadImage(src) {
  return new Promise((res, rej) => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => {
      res(img);
    };
    img.onerror = () => {
      // img.src =
      //   "https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png";
      rej(new Error("Image was not download"));
    };
  });
}
