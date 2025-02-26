import EmailInput from '@components/UiKit/FormInputs/EmailInput'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import schema from './schema'
import styles from './signupform.module.scss'

function SignUpForm() {
  const onSubmit = (data) => {console.log(data)}

  const {
    control,
    handleSubmit,
    formState: { errors }
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
        </div>
        <div className={styles.input_field}></div>
        <div className={styles.input_field}></div>
      </form>
    </div>
  )
}

export default SignUpForm
