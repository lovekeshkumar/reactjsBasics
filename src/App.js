import "./App.css";
import ComponentC from "./components/contextapi/ComponentC";
import { UserProvider } from "./components/contextapi/userContext";
import PostForm from "./components/http/PostForm";
import PostList from "./components/http/PostList";
import Input from "./components/refsdemo/Input";
// import Home from "./components/props/Home";
// import Message from "./components/event/Message";
// import Counter from "./components/state/Counter";
// import Eventbinding from "./components/eventbinding/Eventbinding";
// import ParentComp from "./components/methodasprop/ParentComp";
// import UserGreetings from "./components/condrendering/UserGreetings";
// import NameList from "./components/listrendering/NameList";
// import Form from "./components/controllercomp/Form";
// import LifecycleA from "./components/lifecyclemethods/mountingmethod/LifecycleA";
// import Fragementdemo from "./components/fragments/Fragementdemo";
// import Table from "./components/fragments/Table";
// import ParentComp from "./components/pure&memo/ParentComp";
// import RefsDemo from "./components/refsdemo/RefsDemo";
// import FocusInput from "./components/refsdemo/FocusInput";
// import FrParentInput from "./components/refsdemo/FrParentInput";
// import PortalDemo from "./components/portals/PortalDemo";
// import Hero from "./components/errorboundaries/Hero";
// import Errorbound from "./components/errorboundaries/Errorbound";

// import ClickCounterTwo from "./components/renderasprops/ClickCounterTwo";
// import Counter from "./components/renderasprops/Counter";
// import HoverCounterTwo from "./components/renderasprops/HoverCounterTwo";
// import User from "./components/renderasprops/User";

function App() {
  return (
    <div className="App">

      <PostForm/>
      {/* <PostList/> */}

      {/*
<UserProvider value= "Bobby">
<ComponentC />
</UserProvider>

 <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></ClickCounterTwo>
        )}
      </Counter>
       <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></HoverCounterTwo>
        )}
      </Counter>


        <HoverCounterTwo/>
      <ClickCounterTwo/>
      <User render={(isLoggedIn) => isLoggedIn ? 'Bobby' : 'Guest'} />
      <ClickCounter name='bobby'/>
    <HoverCounter/>
      <Errorbound>
    <Hero heroName='superman'/>
    </Errorbound>
    <Errorbound>
    <Hero heroName='batman'/>   
    </Errorbound>
    <Errorbound>
    <Hero heroName='joker'/>
     </Errorbound>
       <PortalDemo/>
      
       <FrParentInput/>
           <FocusInput/>
       <RefsDemo/>
  <ParentComp/>
    <Table/>
      <Fragementdemo/>
     <LifecycleA/>
   <Form/>
<NameList/>
<UserGreetings />
      <ParentComp/>
  <Counter/>  
   <Message/>
    
     <Home  name="james" work="actor">
      <button>hello</button>
      </Home>
      <Eventbinding/> */}
    </div>
  );
}

export default App;
