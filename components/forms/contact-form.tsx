'use client'

import { useForm, SubmitHandler } from 'react-hook-form'



import { z } from 'zod'

import { ContactFormSchema } from '@/lib/schema'

import { toast } from 'sonner'
import { sendEmail } from '@/actions/contact.action'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'

export type ContactFormInputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  const processForm: SubmitHandler<ContactFormInputs> = async data => {
    const result = await sendEmail(data)

    if (result?.success) {
      console.log({ data: result.data })
      toast.success('Email sent!')
      reset()
      return
    }

    // toast error
    console.log(result?.error)
    toast.error('Something went wrong!')
  }

  return (

    <div className='w-full flex justify-start items-start gap-4 max-md:flex-col '>
    
    <form
      onSubmit={handleSubmit(processForm)}
      className='w-[50%] mx-auto flex flex-1 flex-col gap-4 text-gray-600 sm:w-1/2 lg:w-1/3 mt-16 max-md:w-full'
    >
        <h1 className='text-3xl text-center font-bold text-white'>Contact Us</h1>
      <div>
        <input
          placeholder='name'
          className='w-full rounded-lg bg-transparent px-4 py-3 border  border-pink-950'
          {...register('name')}
        />
        {errors.name?.message && (
          <p className='ml-1 mt-1 text-sm text-red-400'>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <input
          placeholder='email'
          className='w-full rounded-lg bg-transparent px-4 py-3 border  border-pink-950 '
          {...register('email')}
        />
        {errors.email?.message && (
          <p className='ml-1 mt-1 text-sm text-red-400'>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          rows={5}
          cols={5}
          placeholder='message'
          className='w-full rounded-lg bg-transparent px-4 py-3 border  border-pink-950'
          {...register('message')}
        />
        {errors.message?.message && (
          <p className='ml-1 text-sm text-red-400'>{errors.message.message}</p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className='rounded-lg border border-black bg-black py-2.5 font-medium text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50'
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
    <Image src='/planet.png' width={450} height={500} alt='logo' className='opacity-50' />
    </div>
  )
}