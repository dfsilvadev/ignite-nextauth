type User = {
  permissions: string[];
  role: string[];
};

type ValidateUserPermissionsProps = {
  user: User;
  permission?: string[];
  roles?: string[];
};

export function validateUserPermissions({ user, permissions, roles }) {
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every((permission) =>
      user.permissions.includes(permission)
    );
    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasAllRoles = roles.some((role) => user.roles.includes(role));
    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
