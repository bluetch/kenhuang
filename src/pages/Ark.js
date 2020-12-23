import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { config } from "../config/firebase";

const ark = [
  {
    name: "電動車 Tesla inc (TSLA)",
    share: 2261867,
    shareLast: 2261000,
    value: 921348903,
    weight: 10.69,
    weightLast: 10.00,
    link: "",
  },
  {
    name: "基因测序 Invitae corp (NVTA)",
    share: 123,
    shareLast: 122,
    value: "",
    weight: 9.35,
    weightLast: 10.00,
    link: "",
  },
  {
    name: "移動支付 Square inc - A (SQ)",
    share: 22,
    shareLast: 18,
    value: "",
    weight: 6.33,
    weightLast: 5,
    link: "",
  },
  {
    name: "串流媒體 Roku inc (ROKU)",
    share: 999,
    shareLast: 888,
    value: "",
    weight: 5.21,
    weightLast: 6,
    link: "",
  },
  {
    name: "生物製藥 Crisper therapeutics AG (CRSP)",
    share: 101010,
    shareLast: 202020,
    value: "",
    weight: 4.98,
    weightLast: 3,
    link: "",
  },
];

class Ark extends React.Component {
  render() {
    return (
      <section className="stock">
        <div className="container">
          <FirebaseAuthProvider {...config} firebase={firebase}>
            <div>
              <button
                onClick={() => {
                  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                  firebase.auth().signInWithPopup(googleAuthProvider);
                }}
              >
                Sign In with Google
        </button>
              <button
                data-testid="signin-anon"
                onClick={() => {
                  firebase.auth().signInAnonymously();
                }}
              >
                Sign In Anonymously
        </button>
              <button
                onClick={() => {
                  firebase.auth().signOut();
                }}
              >
                Sign Out
        </button>
              <FirebaseAuthConsumer>
                {({ isSignedIn, user, providerId }) => {
                  return (
                    <pre style={{ height: 300, overflow: "auto" }}>
                      {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                    </pre>
                  );
                }}
              </FirebaseAuthConsumer>
              <div>
                <IfFirebaseAuthed>
                  {() => {
                    return <div>You are authenticated</div>;
                  }}
                </IfFirebaseAuthed>
                <IfFirebaseAuthedAnd
                  filter={({ providerId }) => providerId !== "anonymous"}
                >
                  {({ providerId }) => {
                    return <div>You are authenticated with {providerId}</div>;
                  }}
                </IfFirebaseAuthedAnd>
              </div>
            </div>
          </FirebaseAuthProvider>
          <div className="jumbotron">
            <h1>ARK ETF</h1>
          </div>
          <ul>
            <li>ARKK ARK創新</li>
            <li>ARKQ Autonomous Technology & Robotics 自主科技和機器人</li>
            <li>ARKW Next Generation Internet 次世代網路</li>
            <li>ARKG Genomic Revolution 基因革命</li>
            <li>ARKF Fintech Innovation 金融科技創新</li>
          </ul>
          <h2>ARKK</h2>
          Last updated: 09/25/2020
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Company</th>
                <th>Share</th>
                <th>Market Value</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {
                ark.map((item, index) => {
                  if (item.share > item.shareLast) {
                    var shareNow = item.share - item.shareLast;
                    var shareType = "text-success";
                    var sharePlus = "+";
                  } else {
                    shareNow = item.share - item.shareLast;
                    shareType = "text-danger";
                  }
                  if (item.weight > item.weightLast) {
                    var weightNow = item.weight - item.weightLast;
                    var weightType = "text-success";
                    var weightPlus = "+";
                  } else {
                    weightNow = item.weight - item.weightLast;
                    weightType = "text-danger";
                  }
                  return (
                    <tr key={index + 1}>
                      <td>{index}</td>
                      <td>{item.name}</td>
                      <td className="share">{item.share.toLocaleString('en-US')} <p className={shareType}>({sharePlus}{shareNow})</p>
                      </td>
                      <td>${item.value.toLocaleString('en-US')}</td>
                      <td>{item.weight}% <p className={weightType}>({weightPlus}{weightNow.toFixed(2)})</p></td>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>
        </div>
      </section>
    )
  }
};

export default Ark;