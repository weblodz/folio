import EmailInput from '@components/UiKit/FormInputs/EmailInput'
import PasswordInput from '@components/UiKit/FormInputs/PasswordInput'
import FormButton from '@components/UiKit/Buttons/FormButton'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import schema from './schema'
import styles from './signupform.module.scss'

function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (data) => {
    setIsLoading(true)
    setTimeout(() => {
      console.log(data)
      setIsLoading(false)
    }, 2000)
  }

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur'
  })

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.title}>Sign-in information</div>
        <div className={styles.input_field}>
          <Controller
            name='email'
            control={control}
            defaultValue=""
            render={
            ({ field }) => (
              <EmailInput isValid={!errors.email} errorMessage={errors.email?.message} {...field}/>
            )}/>
        </div>
        <div className={styles.input_field}>
          <Controller
            name='password'
            control={control}
            defaultValue=""
            render={({field}) => (
              <PasswordInput isValid={!errors.password} errorMessage={errors.password?.message} {...field} />
          )}/>
        </div>
        <div className={styles.input_field}>
          <Controller
            name='confirmPassword'
            control={control}
            defaultValue=""
            label="Confirm Password"
            render={({field}) => (
              <PasswordInput isValid={!errors.confirmPassword} errorMessage={errors.confirmPassword?.message} {...field} />
            )}/>
        </div>
        <FormButton isLoading={isLoading} onClick={() => {handleSubmit(onSubmit)}} text={'Sign Up'} isActive={isValid && !isLoading} />
      </form>
    </div>
  )
}

export default SignUpForm
