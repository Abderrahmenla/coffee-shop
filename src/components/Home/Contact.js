import React from 'react'
import Title from '../Globals/Title'

export default function Contact () {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="abderrahmen lahmedi" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" className="form-control" id="email" placeholder="abderrahmen.lahmedigl@gmail.com" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" className="form-control" rows="5" cols="80" placeholder="your description "></textarea>
            </div>
            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5" name="button"> Submit</button>
          </form>
        </div>
      </div>
    </section>

  )
}
