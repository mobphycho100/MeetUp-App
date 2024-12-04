import {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from '../../Context/UserContext'

import Navbar from '../Navbar'

import {
  ResponsiveContainer,
  FormImage,
  Form,
  FormHeading,
  FeildContainer,
  Label,
  Input,
  SelectEl,
  Option,
  Button,
  ErrorMessage,
} from '../StyledComponents/Register'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = () => {
  const [nameInput, setNameInput] = useState('')
  const [topicInput, setTopicInput] = useState(topicsList[0].id)
  const [showErr, setShowErr] = useState(false)

  const history = useHistory()

  const {setUsername, setTopic} = useContext(UserContext)

  const handleNameChange = e => {
    setNameInput(e.target.value)
  }

  const handleTopic = e => {
    setTopicInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (nameInput.trim(' ') === '') {
      setShowErr(true)
    } else {
      const selectedTopic = topicsList.find(each => each.id === topicInput)

      setShowErr(false)
      setUsername(nameInput)
      setTopic(selectedTopic.displayText)

      history.replace('/')
    }
  }

  return (
    <>
      <Navbar />
      <ResponsiveContainer>
        <FormImage
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
          alt="website register"
        />
        <Form onSubmit={handleSubmit}>
          <FormHeading>Let us join</FormHeading>
          <FeildContainer>
            <Label htmlFor="name">NAME</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={nameInput}
              onChange={handleNameChange}
            />
          </FeildContainer>
          <FeildContainer>
            <Label htmlFor="topic">TOPICS</Label>
            <SelectEl id="topic" value={topicInput} onChange={handleTopic}>
              {topicsList.map(each => (
                <Option key={each.id} value={each.id}>
                  {each.displayText}
                </Option>
              ))}
            </SelectEl>
          </FeildContainer>
          <Button type="submit">Register Now</Button>
          <ErrorMessage>
            {showErr ? 'Please enter your name' : null}
          </ErrorMessage>
        </Form>
      </ResponsiveContainer>
    </>
  )
}

export default Register
