import { colors, spacing, typography } from "../../theme";

const BASE = {
    fontFamily: typography.primary,
    color: colors.white,
    fontSize: 14,
}
const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    color: colors.white
}
const BOLD = {
    fontFamily: typography.Bold,
    color: colors.white
}
export const presets = {
    default: BASE,
    bold: {
        fontWeight: 'bold'
    },
    semiBold: {
        fontWeight: '500'
    },
    h1: {
        ...BOLD,
        fontSize: spacing[8]
    },
    h2: {
        ...BOLD,
        fontSize: spacing[7]
    },
    h3: {
        ...BASE_BOLD,
        fontSize: spacing[6]
    },
    h4: {
        ...BASE_BOLD,
        fontSize: spacing[5]
    },
    h5: {
        ...BASE_BOLD,
        fontSize: spacing[4]
    },
    h6: {
        fontSize: spacing[4]
    },
    uppercase: {
        textTransform: 'uppercase'
    },
    flexRow: {
        flexDirection: 'row'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    JCenter: {
        justifyContent: 'center'
    },
    alCenter: {
        alignItems: 'center'
    },
    aselftCenter: {
        alignSelf: 'center'
    },
    bgBlack: {
        backgroundColor: colors.black
    },
    bgGray: {
        backgroundColor: colors.grey
    },
    bb: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        // color: 'red',
    },
    colorWhite: {
        color: colors.white,
    },
    colorBlack: {
        color: colors.black,
    },
    pb: {
        paddingBottom: spacing[4]
    },
    pt: {
        paddingTop: spacing[4]
    },
    ptSm: {
        paddingTop: spacing[1]
    },
    pl: {
        paddingLeft: spacing[3]
    },
    pbSm: {
        paddingBottom: spacing[1]
    }

}