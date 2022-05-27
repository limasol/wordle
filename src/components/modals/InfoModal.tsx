import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Kako igrati?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Pogodi riječ u 6 pokušaja. Nakon svakog pokušaja, boje na ploči će se
        promijeniti da ti pokažu koliko si blizu pravoj riječi.
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" status="correct" />
        <Cell value="E" />
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="M" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Riječ sadrži slovo S i na pravom je mjestu.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="K" />
        <Cell value="I" />
        <Cell value="B" status="present" />
        <Cell value="L" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Riječ sadrži slovo B, ali je na pogrešnom mjestu.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="E" />
        <Cell value="V" />
        <Cell value="B" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Riječ ne sadrži slovo B.
      </p>
    </BaseModal>
  )
}
