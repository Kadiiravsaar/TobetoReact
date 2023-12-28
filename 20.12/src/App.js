import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  // react hooks
  // total, setTotal => initial value
  // let total = 0;

  // neden const totali değişiyorum fakat totalin tanımını değiştirmeyeceğiz
  // react içerisinde değişken kullanıldığında normal tanımlanan değişekenler takip edilmez ui yansımaz
  // fakat usestate ile durumu takip edilir

  const [total, setTotal] = useState(0);

  // useEffect
  // component ilk render edildiğinde. 2 yerde çalışır hem render hemde dep list tetiklendiğinde
  // [] => dep. listesindeki verilerin değiştiği anda tekrar tetiklenen yapıdır.
  useEffect(() => {
    // console.log("UseEffect çalıştı");
    console.log(total);

    if (total >= 10) {
      alert("uyarııı");
      setTotal(10);
    }
  }, [total]);
  // total her değiştiğinde fonksiyonu yakalar (console.log("UseEffect çalıştı"); )

  useEffect(() => {
    console.log("use effect 2"); // bunlarda arka plandan gelen veriler sayfa ilk açıldığında çalışsın
  }, []);

  const increase = () => {
    setTotal(total + 1);
    // set fonks asyn gibi çalışır fakat gibi olduğu için problem olur geriden gelir
  };

  const decrease = () => {
    setTotal(total - 1);
  };

  const [activity, setActivity] = useState("");
  const [activityList, setActivityList] = useState([]);

  const clearActivity = () => {
    setActivity("");
  };

  const addActivity = () => {
    // setActivityList((prevState) => {
    //   prevState.push(activity);
    //   console.log(prevState);
    //   return prevState;
    // });
    setActivityList([...activityList, activity]); // arrayi parçalamaya olanak sağlayan operatör (...act)
    clearActivity();
  };

  const removeActivity = (activity) => {
    setActivityList(activityList.filter(i => i !== activity));
  }

  // Two Way Data Binding => kullanıcıdan girdi aldığı veriler ile arkada tutulan verinin senkron halde ilerlemesinden emin olduğum durum
  return (
    <>
      <div>
        <p>{total}</p>
      </div>
      <div>
        <button onClick={increase}>Artır</button>
        {/* <button onClick={()=>{increase();}}>Artır</button> */}

        <button onClick={decrease}>Azalt</button>
      </div>
      <hr></hr>

      <div>
        <input value={activity} onChange={(event) => { setActivity(event.target.value) }} type='text' placeholder='Aktivite Giriniz..' />
        <br />
        <button onClick={() => { addActivity(); }}>Ekle</button>
        <ul>
          {/* JSX içerisinde iterasyonlar her zaman MAP ile yapılmalıdır. */}
          {activityList.map((element) => (<li key={element}>{element} <button onClick={() => { removeActivity(element) }}>X</button> </li>))}
        </ul>
      </div>
    </>
  );
}
