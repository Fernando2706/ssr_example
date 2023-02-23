import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSidePropsContext } from 'next'
import { data, Type } from '@/data/ddbb'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props: {
  data: Type[]
}) {
  const router = useRouter()
  return (
    <>
      <input 
        placeholder='Search by country'
        onChange={(value)=>{
          router.push(`/?country=${value.target.value}`)
        }}
      />
      {props.data.map(element => (
        <div key={element.id} style={{display:"flex", alignItems:"center"}}>
          <h2>{element.name}</h2>
          <h3>{element.country}</h3>
        </div>
      ))}
    </>
  )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { country } = context.query
  const props = data.filter(element => element.country.includes(country as string))
  return {
    props: {
      data: props
    }, // will be passed to the page component as props
  }
}