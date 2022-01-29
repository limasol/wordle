import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Kako igrati?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Pogodi riječ u 6 pokušaja. Nakon svakog pokušaja, boje na ploči će se
        promijeniti da ti pokažu koliko si blizu pravoj riječi.
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" status="correct" />
        <Cell value="A" />
        <Cell value="T" />
        <Cell value="K" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500">
        Riječ sadrži slovo P i na pravom je mjestu.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell value="L" status="present" />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500">
        Riječ sadrži slovo L, ali je na pogrešnom mjestu.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="O" />
        <Cell value="T" />
        <Cell value="K" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500">Riječ ne sadrži slovo K.</p>
    </BaseModal>
  )
}
