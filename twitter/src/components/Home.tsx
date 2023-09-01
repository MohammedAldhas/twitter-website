// import React from "react";
import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";
import star from "../assets/icons/grade_FILL0_wght400_GRAD0_opsz24.svg";
import profile from "../assets/image/prof.webp";
import axios from "axios";

export default function Home() {
  const [postTweet, setpostTweet] = useState("");
  const [tweet, settweet] = useState([]);

  useEffect(() => {
    axios
      .get("https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/tweet")
      .then((res) => {
        settweet(res.data);
      });
  }, []);

  function addToLocal(el){
    if (localStorage.getItem("color")) {
      el.target.classList = localStorage.getItem("color");
      
    }
  }
  function addclass(e) {
    addToLocal(e)
    // console.log(e);
    
    if (e.target.classList.contains("fa-solid")) {
      e.target.classList = "fa-regular fa-heart";

      localStorage.setItem("color", "fa-solid fa-heart text-red-600");
    } else if (e.target.classList.contains("fa-regular")) {
      e.target.classList = "fa-solid fa-heart text-red-600";
      localStorage.setItem("color", "fa-regular fa-heart");
    }
  }
  return (
    <>
      <div className="border flex flex-col w-3/6 py-3">
        <ul className="flex justify-between mb-3 px-3">
          <li className="font-bold">Home</li>
          <li>
            <img src={star} alt="" />
          </li>
        </ul>
        <hr />
        <div className="input-text flex justify-start items-start py-3">
          <img className="rounded-full w-8 h-8  mx-2" src={profile} alt="" />
          <div className="flex-1 relative">
            <textarea
              className="p-2 w-full resize-none outline-none "
              placeholder="What is happening"
              onChange={(e) => {
                setpostTweet(e.target.value);
              }}
            />
            <button
              className="bg-sky-500 hover:bg-sky-400 rounded-full absolute right-7 bottom-0 w-20 h-9 text-white"
              onClick={() => {
                axios.post(
                  "https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/tweet",
                  {
                    tweet: postTweet,
                    like: false,
                  }
                );
              }}
            >
              tweet
            </button>
          </div>
        </div>
        <div className="bg-slate-200 h-4"></div>

        <div className="flex flex-col-reverse">
          {tweet.map((e, i) => {
            return (
              <div key={i}>
                <div className="flex items-start py-3 break-all">
                  <img
                    className="rounded-full w-8 h-8  mx-2"
                    src={profile}
                    alt=""
                  />
                  <div className="flex flex-col w-full">
                    <div className="flex items-center gap-1">
                      <p className="font-bold">mohammed</p>
                      <p className="text-sm text-slate-500">@mohammed</p>
                      <p className="text-xs text-slate-500 align-middle">3m</p>
                    </div>
                    <p className="pr-3">{e.tweet}</p>
                    <div className="icons flex justify-between w-4/5 my-3 text-slate-500 opacity-80">
                      <i className="fa-regular fa-comment"></i>
                      <i className="fa-solid fa-retweet"></i>
                      <i
                        // style={{ color: color }}
                        className="fa-regular fa-heart"
                        onClick={(el) => addclass(el)}
                      ></i>
                      <i className="fa-solid fa-upload"></i>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
