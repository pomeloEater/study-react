// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props) {
  console.log('props',props,props.title);
  return (
    <header>
      <h1><a href="/" onClick={(event) => {
        event.preventDefault(); // a 태그 기본 동작 이벤트(reload) 방지
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  );
}

function Nav(props) {
 /*
 // Array.map 함수 이용하여 jsx array 생성하기
  const topics = props.topics;
  const listItems = topics.map((topic) => 
      <li key={topic.id}>
        <a id={topic.id} href={'/read/' + topic.id} onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>{topic.title}</a>
      </li>
    );
  // return 안에서서 topics.map((topic) => {}) 은 안 되는 이유는?
  return (
    <nav>
      <ol>
        {listItems}
      </ol>
    </nav>
  );
  */
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a></li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title"/></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"/></p>
      </form>
    </article>
  );
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input type="text" 
          name="title" placeholder="title" value={title} 
          onChange={(event) => {
            // console.log(event.target.value);
            setTitle(event.target.value);
          }}/></p>
        <p><textarea name="body" placeholder="body" value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}></textarea></p>
        <p><input type="submit" value="Update"/></p>
      </form>
    </article>
  );
}


function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // console.log('_mode', _mode);
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]);
  let content = null;
  let contextControl = null;

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      // props.onChangeMode(event.target.id) 와 props.onChangeMode(Number(event.target.id)) 의 차이점
      // 
      // console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <li><a href={'/update/' + id} onClick={(event) => {
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title, body) => {
      const newTopic = {id: nextId, title: title, body: body};
      // topics.push(newTopic);
      // setTopics(topics);
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1); // setNextId(newTopics.length)가 안 되는 이유는???
    }}></Create>
  } else if (mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      // console.log(title, body);
      const updatedTopic = {id: id, title: title, body: body};
      const newTopics = [...topics];
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
      setId(id);
    }}></Update>
  }

  return (
    <div>
      <Header title="REACT" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={(event) => {
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
