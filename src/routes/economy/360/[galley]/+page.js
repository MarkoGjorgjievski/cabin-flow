export const ssr = false

export const load = ({ params }) => {
  return {
    galley: params.galley
  }
}
