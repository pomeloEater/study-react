import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  /* useEffect : 렌더링될 때마다 특정 작업을 수행하는 Hook */
  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다!");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // });

  /*
    두 번째 인자 array : effect가 종속되어 있는 값의 배열
      [] : 마운트될 때만 실행
  */
  // useEffect(() => {
  //   console.log("마운트될 때만 실행됩니다.");
  // }, []);

  // useEffect(() => {
  //   console.log("effect");
  //   console.log(name);
  //   /*
  //     뒷정리(cleanup) 함수
  //       컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행해야 한다면!
  //   */
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);

  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("unmount");
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
