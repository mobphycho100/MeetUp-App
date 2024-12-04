import styled from 'styled-components'

// Main container for the page layout
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: #f9fafb;
  font-family: 'Roboto', sans-serif;
`

// Container for the text content and greeting
export const GreetingContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

// Heading for the registered user
export const UserHeading = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #0b69ff;
  margin-bottom: 5px;
`

// Subheading for the topic
export const TopicName = styled.p`
  font-size: 25px;
  color: #334155;
  font-weight: bold;
`

// Heading for the registration message
export const WelcomeHeading = styled.h1`
  font-size: 46px;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 5px;
`

// Paragraph for registration instruction
export const Para = styled.p`
  font-size: 22px;
  color: #64748b;
  margin-bottom: 16px;
`

// Button for registration
export const Button = styled.button`
  background-color: #0b69ff;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0053cc;
  }
`

// Image for the illustration
export const Image = styled.img`
  width: 600px;
  max-width: 100%;
  margin-top: 20px;
`
