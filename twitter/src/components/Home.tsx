// import React from "react";
import { useState, useEffect } from "react";

// import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";
import star from "../assets/icons/grade_FILL0_wght400_GRAD0_opsz24.svg";
import profile from "../assets/image/prof.webp";
import axios from "axios";
type twit = {
  tweet: string;
  id: string;
  liked:boolean
};

export default function Home() {
  const [postTweet, setpostTweet] = useState([]);
  const [tweet, settweet] = useState<twit[]>([]);

  const [btn, setbtn] = useState("hidden");

  useEffect(() => {
    axios
      .get("https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/tweet")
      .then((res) => {
        settweet(res.data);
      });
  }, []);

  function addclass(e) {
    if (e.target.classList.contains("fa-solid")) {
      e.target.classList = "fa-regular fa-heart";

      localStorage.setItem("color", "fa-solid fa-heart text-red-600");
    } else if (e.target.classList.contains("fa-regular")) {
      e.target.classList = "fa-solid fa-heart text-red-600";
    }
  }

  const deleteTweet = (id: string) => {
    axios
      .delete(`https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/tweet/${id}`)
      .then(() => {
        settweet(
          tweet.filter((del) => {
            return del.id !== id;
          })
        );
      });
    console.log(id);
  };
  
  return (
    <>
      <div className="border flex flex-col flex-1 py-3 ">
        <ul className="flex justify-between mb-3 px-5">
          <li className="font-bold">Home</li>
          <li>
            <img src={star} alt="" />
          </li>
        </ul>
        <hr />
        <div className="input-text flex justify-start items-start py-3 pl-4">
          <img className="rounded-full w-8 h-8  mx-2" src={profile} alt="" />
          <div className="flex-1 relative">
            <textarea
              className="p-2 w-10/12 resize-none outline-none "
              placeholder="What is happening"
              onChange={(e) => {
                setpostTweet(e.target.value);
              }}
            />
            <button
              className="bg-sky-500 hover:bg-sky-400 rounded-full absolute right-25 bottom-0 w-20 h-9 text-white"
              onClick={() => {
                setTimeout(() => {
                  
                  axios.post(
                    "https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/tweet",
                    {
                      tweet: postTweet,
                      liked:false
                    }
                  );
                }, 1000);
              }}
            >
              tweet
            </button>
          </div>
        </div>
        <div className="bg-slate-200 h-4"></div>

        <div className="flex flex-col-reverse pl-4 min-h-0 overflow-y-auto">
          {tweet.map((e, i) => {
            return (
              <div key={i}>
                <div className="flex items-start py-3 break-all relative">
                  <i
                    className="fa-solid fa-chevron-down absolute top-3 right-3"
                    onClick={() => {
                      if (btn == "hidden") {
                        setbtn("flex");
                      } else if (btn == "flex") {
                        setbtn("hidden");
                      }
                    }}
                  ></i>
                  <div
                    className={`absolute top-8 right-3 w-1/6 shadow ${btn} justify-center items-center p-5 bg-white`}
                  >
                    <button
                      className="bg-red-600 rounded-full w-11/12 p-1 text-white text-sm"
                      onClick={() => {
                        deleteTweet(e.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
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
