import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 1080px;
  min-height: 90vh;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const FormImage = styled.img`
  width: 40%;
  // max-height: 400px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 400px;
  }
`

export const Form = styled.form`
  width: 40%;
  background-color: #ffffff;
  padding: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 95%;
  }
`

export const FormHeading = styled.h1`
  font-size: 35px;
  color: #334155;
  font-weight: bold;
  text-align: left;
  margin-bottom: 26px;
`

export const FeildContainer = styled.div`
  margin-bottom: 25px;
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #7b8794;
  font-weight: bold;
  margin-bottom: 6px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
  margin-top: 5px;

  &:focus {
    border-color: #3b82f6;
  }
`

export const SelectEl = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
  margin-top: 5px;

  &:focus {
    border-color: #3b82f6;
  }
`

export const Option = styled.option`
  font-size: 15px;
  padding: 5px;
`

export const Button = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    background-color: #2563eb;
  }
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin-top: 5px;
  font-weight: 500;
  text-align: center;
`
