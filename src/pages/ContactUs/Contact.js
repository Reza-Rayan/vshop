import React from 'react'

function Contact() {
  return (
    <div>
      <h1>ارتباط با ما</h1>
      <form>
        <div className='form-group' >
          <label>نام و نام خانوادگی</label>
          <input type="text" className="form-control w-25 p-2" placeholder='مثلا: رضا حسین زاده' />
        </div>
      </form>
    </div>
  )
}

export default Contact