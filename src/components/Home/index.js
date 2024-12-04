import {useContext} from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../../Context/UserContext'
import Navbar from '../Navbar'
import {
  MainContainer,
  GreetingContainer,
  UserHeading,
  TopicName,
  WelcomeHeading,
  Para,
  Button,
  Image,
} from '../StyledComponents/Home'

const Home = () => {
  const {username, topic} = useContext(UserContext)

  const renderUserDetails = () => (
    <>
      <UserHeading>Hello {username}</UserHeading>
      <TopicName>Welcome to {topic}</TopicName>
    </>
  )

  const renderRegisterDetails = () => (
    <>
      <WelcomeHeading>Welcome to Meetup</WelcomeHeading>
      <Para>Please register for the topic</Para>
      <Link to="/register">
        <Button type="button">Register</Button>
      </Link>
    </>
  )

  return (
    <>
      <Navbar />
      <MainContainer>
        <GreetingContainer>
          {username ? renderUserDetails() : renderRegisterDetails()}
        </GreetingContainer>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </MainContainer>
    </>
  )
}

export default Home
