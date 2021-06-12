import React, { Component } from 'react';
import ax from 'axios';
import FavRecipe from './FavRecipe';
import Update from './Update';

export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFav:false,
            favData : [],
            showForm:false,
            label: '',
            image:'',
            index:0
        }
    }

    componentDidMount = async() => {
        const root = process.env.REACT_APP_HOST;
        const recipes = await ax.get(`${root}/getfavorite`);
        
        this.setState({
            showFav:true,
            favData: recipes.data
        })
    }

    deleteRecipe = async(index) => {
        const root = process.env.REACT_APP_HOST;
        const id = this.state.favData[index]._id;

        console.log(id);
        const recipes = await ax.delete(`${root}/deleterecipe/${id}`);
        this.setState({
            favData:recipes.data
        })

    }

    showForm = (index) => {

        const chosenRecipe = this.state.favData[index];
        this.setState({
            showForm: true,
            label: chosenRecipe.label,
            image: chosenRecipe.image,
            index:index
        })
    }
    updateImage = (e) => {this.setState({image:e.target.value})}
    updateLabel = (e) => {this.setState({label:e.target.value})}
    updateRecipe = async(e) => {
        e.preventDefault();
        const root = process.env.REACT_APP_HOST;
        const newRecipe = {
            label:this.state.label,
            image:this.state.image
        }
        const id = this.state.favData[this.state.index]._id;
        const updatedRecipes = await ax.put(`${root}/updaterecipe/${id}`,newRecipe);
        this.setState({
            favData:updatedRecipes.data
        })
    }
    render() {
        return (
            <>
            {
                this.state.showForm && 
                <Update
                label={this.state.label}
                image={this.state.image}
                updateLabel = {this.updateLabel}
                updateImage={this.updateImage}
                updateRecipe = {this.updateRecipe}
                />

            }
            
            
            {
                this.state.favData.map((item,idx) => {
                    return(
                        <FavRecipe
                        index = {idx}
                        recipe = {item}
                        delete = {this.deleteRecipe}
                        update = {this.showForm}
                        />
                    )
                })

            }
            </>
        )
    }
}

export default Favorite;
