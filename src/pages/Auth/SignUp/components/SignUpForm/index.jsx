import EmailInput from '@components/UiKit/FormInputs/EmailInput'
import PasswordInput from '@components/UiKit/FormInputs/PasswordInput'
import FormButton from '@components/UiKit/Buttons/FormButton'
import DataPolicyCheckbox from '@pages/Auth/SignUp/components/DataPolicyCheckbox'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import schema from './schema.js'
import styles from './signupform.module.scss'

function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation('nsAuth')

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: zodResolver(schema(t)),
    mode: 'onBlur',
    defaultValues: {
      acceptTerms: false
    }
  })

  //TODO: change to sending data to server after the backend is ready
  const onSubmit = (data) => {
    setIsLoading(true)
    setTimeout(() => {
      console.log(data)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.title}>
          {t('signInInfo')}
        </div>
        <div className={styles.input_field}>
          <Controller
            name='email'
            control={control}
            defaultValue=""
            render={
            ({ field }) => (
              <EmailInput isValid={!errors.email} errorMessage={errors.email?.message} {...field}
                label={t('emailAddress')}
              />
            )}/>
        </div>
        <div className={styles.input_field}>
          <Controller
            name='password'
            control={control}
            defaultValue=""
            render={({field}) => (
              <PasswordInput isValid={!errors.password} errorMessage={errors.password?.message} {...field}
                label={t('password')}
              />
          )}/>
        </div>
        <div className={styles.input_field}>
          <Controller
            name='confirmPassword'
            control={control}
            defaultValue=""
            render={({field}) => (
              <PasswordInput isValid={!errors.confirmPassword} errorMessage={errors.confirmPassword?.message} {...field}
                label={t('confirmPassword')}
              />
            )}/>
        </div>
        <Controller name='acceptTerms'
          control={control}
          render={({field}) => (
            <DataPolicyCheckbox checked={field.value} {...field}/>
        )}/>
        <FormButton isLoading={isLoading}
          onClick={() => {handleSubmit(onSubmit)}}
          text={t('signUp')}
          isActive={isValid && !isLoading}
        />
      </form>
    </div>
  )
}

export default SignUpForm
