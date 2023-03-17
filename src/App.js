// Amardeep Mann
// 3-17-23
// Social Media Dashboard
// Peer Reviewed By: Pedro
// Excellent work on getting your responsiveness to work as it should all the way from 320px to 2560px. I can tell you put a lot of effort into following the design as close as possible and it is basically identical.  I liked how you used 'props' in your functional components instead of passing in all your prop names. The name of your props are all very clear and just makes it easy to understand what each prop is for. Great work on using several components! It looks like you are truly understanding how they operate. I also like how you used CSS variables in your css file! It makes toggling between themes so much more efficient. Two small things I want to mention is that when I hover over the toggle slider in light mode it stays grey instead of changing to the gradient color. Secondly, the border on the instagram div is visible on the left side. Just a small sliver. Overall you did a great job and I always learn something new when reviewing your code!

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import TopRow from './components/TopRow';
import BottomRow from './components/BottomRow'

function App() {
  return (
    <>
      <Header/>
      <TopRow/>
      <BottomRow/>
    </>
  );
}

export default App;