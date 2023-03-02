import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ setFoods }) {
    const [formData, setFormData] = useState({ name: '', image: '', calories: 0, servings: 0 })

    function handleSubmit(event) {
        event.preventDefault()
        setFoods((foods) => {
            const copy = [...foods]
            copy.push(formData)
            return copy
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={formData.name} type="text" onChange={(event) => { setFormData({ ...formData, name: event.target.value }) }} />

            <label>Image</label>
            <Input value={formData.image} type="text" onChange={(event) => { setFormData({ ...formData, image: event.target.value }) }} />

            <label>Calories</label>
            <Input value={formData.calories} type="text" onChange={(event) => { setFormData({ ...formData, calories: event.target.value }) }} />

            <label>Servings</label>
            <Input value={formData.servings} type="text" onChange={(event) => { setFormData({ ...formData, servings: event.target.value }) }} />
            <button type="submit">Create</button>
        </form>
    );
}

export default AddFoodForm;
