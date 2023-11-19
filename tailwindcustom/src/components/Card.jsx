
function Card({username,role}) {


  return (
    <div>
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://th.bing.com/th/id/R.6fd3b2549cf1f0bda36b71c42e8d3cd7?rik=L%2fCYIiqulbxToQ&riu=http%3a%2f%2fusdailyreview.com%2fwp-content%2fuploads%2f2014%2f08%2ftechnology.jpg&ehk=dzaRzyft3FDapcPTuIGU6nF%2b2zznUv5dDXCjidMhVMA%3d&risl=&pid=ImgRaw&r=0" alt="image" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4" />
    <blockquote>
      <p className="text-lg font-medium w-100">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, veritatis iusto, vitae molestiae laborum quod excepturi, sit nesciunt minus provident tempore molestias. Blanditiis vitae vel iste modi placeat delectus aliquam!
      </p>
    </blockquote>
    <figcaption className="font-medium w-auto ">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {role}, India
      </div>
    </figcaption>
    </figure>
  </div>

  )
}

export default Card
