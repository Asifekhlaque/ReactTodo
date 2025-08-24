import React from 'react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const create = (props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const todos = props.todos
    const setTodos = props.setTodos
    const submitHandler = (data) => {
        // e.preventDefault();
        console.log(data)
        data.id = nanoid()
        data.isDone = false
        const copyData = [...todos]
        copyData.push(data)
        setTodos([...copyData])

        toast.success("Todo Has Successfully Created")


        reset()

    }
    return (
        <div>
            <h1 className='text-6xl font-[300] mb-1 text-white'>Set <span className='text-pink-500'> Reminder </span>For Tasks</h1>
            <form onSubmit={handleSubmit(submitHandler)} className=' gap-2'>
                <input
                    type="text"
                    placeholder='Enter your todo'
                    {...register("todo", {
                        required: "This field is required",
                    })}
                    className='border-b-[1px] border-white py-2 px-4 w-[410px] text-white mr-4' />
                <button className='bg-transparent text-white rounded border-2 border-white py-1 px-5 active:bg-pink-500 '>Create Todo</button>
                <br />
                <small className='text-red-500'>{errors?.todo?.message}</small>
            </form>
        </div>
    )
}

export default create
