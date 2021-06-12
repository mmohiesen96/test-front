
import React, { Component } from 'react';
import ax from 'axios';
import Recipe from './Recipe';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRecipe: false,
            recipeData: []
        }
    }
    componentDidMount = async () => {
        const local = process.env.REACT_APP_HOST;
        const recipes = await ax.get(`${local}/recipes?type=chicken`);
        this.setState({
            showRecipe: true,
            recipeData: recipes.data
        })
    }


    addToFav = async (recipeData) => {
        await ax.post(`${process.env.REACT_APP_HOST}/addtofavorite`,recipeData);
    }
    render() {
        return (
            <>
                {this.state.showRecipe &&
                    this.state.recipeData.map((item,idx) => {
                        return (
                            <Recipe
                                recipe = {item} 
                                index = {idx}
                                addToFav = {this.addToFav}
                                />
                        )
                    })
                }
            </>
        )
    }
}

export default Main
